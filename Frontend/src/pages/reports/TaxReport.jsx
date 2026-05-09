import usePhoenixInit from '../../hooks/usePhoenixInit';
import { taxReportData } from '../../data/reportsData';
export default function TaxReport() { usePhoenixInit();
  const s = taxReportData.summary;
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Tax Report</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">🧾 Tax Report</h2>
    <div className="d-flex flex-wrap gap-3 mb-4"><input className="form-control" type="date" style={{width:'auto'}} /><span className="align-self-center">to</span><input className="form-control" type="date" style={{width:'auto'}} />
      <div className="ms-auto"><button className="btn btn-phoenix-secondary"><span className="fas fa-download me-2"></span>Export for Filing</button></div></div>
    <div className="row g-3 mb-4">
      {[{l:'Total Tax Collected',v:`₹${s.totalCollected.toLocaleString()}`,i:'🧾'},{l:'GST @ 18%',v:`₹${s.gst18.toLocaleString()}`,i:'📊'},{l:'GST @ 12%',v:`₹${s.gst12.toLocaleString()}`,i:'📈'},{l:'Exempt',v:`₹${s.exempt.toLocaleString()}`,i:'🆓'}].map((c,i)=>
        <div key={i} className="col-6 col-md-3"><div className="card border border-translucent"><div className="card-body d-flex align-items-center"><span className="fs-5 me-3">{c.i}</span><div><p className="text-body-tertiary mb-0 fs-9">{c.l}</p><h4 className="mb-0">{c.v}</h4></div></div></div></div>)}
    </div>
    <div className="row g-4">
      <div className="col-md-6"><div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">Monthly Tax Collection</h5></div><div className="card-body">
        <div className="d-flex align-items-end gap-2" style={{height:160}}>
          {taxReportData.byMonth.map((m,i)=><div key={i} className="text-center flex-1"><div className="bg-primary rounded-top mx-auto" style={{height:`${(m.collected/20000)*160}px`,maxWidth:40,minHeight:10}}></div><p className="mb-0 fs-10 mt-2">{m.month}</p><p className="mb-0 fs-10 text-body-tertiary">₹{(m.collected/1000).toFixed(1)}k</p></div>)}
        </div></div></div></div>
      <div className="col-md-6"><div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">Tax by Category</h5></div><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
        <thead><tr><th className="ps-3">CATEGORY</th><th className="text-center">TAX RATE</th><th className="text-end">TAXABLE</th><th className="text-end pe-3">TAX</th></tr></thead>
        <tbody>{taxReportData.byCategory.map((c,i)=><tr key={i}><td className="align-middle ps-3 fw-semibold">{c.category}</td><td className="align-middle text-center">{c.taxRate}</td>
          <td className="align-middle text-end">₹{c.taxable.toLocaleString()}</td><td className="align-middle text-end pe-3 fw-bold">₹{c.tax.toLocaleString()}</td></tr>)}</tbody>
      </table></div></div></div></div>
    </div></div></>);
}
