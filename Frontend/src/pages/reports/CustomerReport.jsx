import usePhoenixInit from '../../hooks/usePhoenixInit';
import { customerReportData } from '../../data/reportsData';
export default function CustomerReport() { usePhoenixInit();
  const s = customerReportData.summary;
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Customer Report</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">👥 Customer Report</h2>
    <div className="row g-3 mb-4">
      {[{l:'Total Customers',v:s.totalCustomers,i:'👥'},{l:'New This Month',v:s.newThisMonth,i:'🆕'},{l:'Returning Rate',v:`${s.returningRate}%`,i:'🔄'},{l:'Avg Lifetime Value',v:`₹${s.avgLifetimeValue.toLocaleString()}`,i:'💎'}].map((c,i)=>
        <div key={i} className="col-6 col-md-3"><div className="card border border-translucent"><div className="card-body d-flex align-items-center"><span className="fs-5 me-3">{c.i}</span><div><p className="text-body-tertiary mb-0 fs-9">{c.l}</p><h4 className="mb-0">{c.v}</h4></div></div></div></div>)}
    </div>
    <div className="row g-4">
      <div className="col-md-7"><div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">Customer Acquisition</h5></div><div className="card-body">
        <div className="d-flex align-items-end gap-3" style={{height:180}}>
          {customerReportData.acquisition.map((m,i)=><div key={i} className="text-center flex-1"><div className="d-flex gap-1 justify-content-center align-items-end" style={{height:150}}>
            <div className="bg-primary rounded-top" style={{width:16,height:`${(m.newCustomers/120)*150}px`}} title="New"></div>
            <div className="bg-success rounded-top" style={{width:16,height:`${(m.returning/120)*150}px`}} title="Returning"></div>
          </div><p className="mb-0 fs-10 mt-1">{m.month}</p></div>)}
        </div><div className="d-flex gap-3 mt-3 justify-content-center"><span className="fs-10"><span className="d-inline-block bg-primary rounded me-1" style={{width:10,height:10}}></span>New</span><span className="fs-10"><span className="d-inline-block bg-success rounded me-1" style={{width:10,height:10}}></span>Returning</span></div>
      </div></div></div>
      <div className="col-md-5"><div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">Top Customers</h5></div><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
        <thead><tr><th className="ps-3">NAME</th><th className="text-center">ORDERS</th><th className="text-end pe-3">SPENT</th></tr></thead>
        <tbody>{customerReportData.topCustomers.map((c,i)=><tr key={i}><td className="align-middle ps-3 fw-semibold">{c.name}</td><td className="align-middle text-center">{c.orders}</td><td className="align-middle text-end pe-3 fw-bold">₹{c.spent.toLocaleString()}</td></tr>)}</tbody>
      </table></div></div></div></div>
    </div></div></>);
}
