import usePhoenixInit from '../../hooks/usePhoenixInit';
import { salesReportData } from '../../data/reportsData';
export default function SalesReport() { usePhoenixInit();
  const s = salesReportData.summary;
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Sales Report</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">📈 Sales Report</h2>
    <div className="d-flex flex-wrap gap-3 mb-4"><input className="form-control" type="date" style={{width:'auto'}} /><span className="align-self-center">to</span><input className="form-control" type="date" style={{width:'auto'}} />
      <div className="ms-auto"><button className="btn btn-phoenix-secondary me-2"><span className="fas fa-file-pdf me-2"></span>PDF</button><button className="btn btn-phoenix-secondary me-2"><span className="fas fa-file-excel me-2"></span>Excel</button><button className="btn btn-phoenix-secondary"><span className="fas fa-file-csv me-2"></span>CSV</button></div></div>
    <div className="row g-3 mb-4">
      {[{l:'Total Revenue',v:`₹${s.totalRevenue.toLocaleString()}`,i:'💰',c:'success'},{l:'Total Orders',v:s.totalOrders,i:'🛒',c:'primary'},{l:'Avg Order Value',v:`₹${s.avgOrderValue.toLocaleString()}`,i:'📊',c:'info'},{l:'Refunds',v:`₹${s.refunds.toLocaleString()}`,i:'↩️',c:'danger'}].map((c,i)=>
        <div key={i} className="col-6 col-md-3"><div className="card border border-translucent"><div className="card-body d-flex align-items-center"><span className="fs-5 me-3">{c.i}</span><div><p className="text-body-tertiary mb-0 fs-9">{c.l}</p><h4 className="mb-0">{c.v}</h4></div></div></div></div>)}
    </div>
    <div className="row g-4">
      <div className="col-md-8"><div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">Monthly Revenue</h5></div><div className="card-body">
        <div className="d-flex align-items-end gap-2" style={{height:200}}>
          {salesReportData.monthly.map((m,i)=><div key={i} className="text-center flex-1"><div className="bg-primary rounded-top mx-auto" style={{height:`${(m.revenue/100000)*200}px`,maxWidth:40,minHeight:20}}></div><p className="mb-0 fs-10 mt-2">{m.month}</p><p className="mb-0 fs-10 text-body-tertiary">₹{(m.revenue/1000).toFixed(0)}k</p></div>)}
        </div></div></div></div>
      <div className="col-md-4"><div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">By Category</h5></div><div className="card-body">
        {salesReportData.byCategory.map((c,i)=><div key={i} className="mb-3"><div className="d-flex justify-content-between mb-1"><span className="fs-9">{c.category}</span><span className="fs-9 fw-semibold">₹{(c.revenue/1000).toFixed(0)}k ({c.percentage}%)</span></div>
          <div className="progress" style={{height:6}}><div className="progress-bar bg-primary" style={{width:`${c.percentage}%`}}></div></div></div>)}
      </div></div></div>
    </div>
    <div className="card mt-4 border border-translucent"><div className="card-header"><h5 className="mb-0">Top Selling Products</h5></div><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
      <thead><tr><th className="ps-3">PRODUCT</th><th className="text-center">SOLD</th><th className="text-end pe-3">REVENUE</th></tr></thead>
      <tbody>{salesReportData.topProducts.map((p,i)=><tr key={i}><td className="align-middle ps-3 fw-semibold">{p.name}</td><td className="align-middle text-center">{p.sold}</td><td className="align-middle text-end pe-3 fw-bold">₹{p.revenue.toLocaleString()}</td></tr>)}</tbody>
    </table></div></div></div></div></>);
}
