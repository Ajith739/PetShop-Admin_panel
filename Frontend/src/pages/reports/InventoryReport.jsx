import usePhoenixInit from '../../hooks/usePhoenixInit';
import { inventoryReportData } from '../../data/reportsData';
export default function InventoryReport() { usePhoenixInit();
  const s = inventoryReportData.summary;
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Inventory Report</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">📦 Inventory Report</h2>
    <div className="row g-3 mb-4">
      {[{l:'Total Products',v:s.totalProducts,i:'📦'},{l:'Total Value',v:`₹${(s.totalValue/100000).toFixed(1)}L`,i:'💰'},{l:'Low Stock',v:s.lowStock,i:'⚠️'},{l:'Out of Stock',v:s.outOfStock,i:'❌'}].map((c,i)=>
        <div key={i} className="col-6 col-md-3"><div className="card border border-translucent"><div className="card-body d-flex align-items-center"><span className="fs-5 me-3">{c.i}</span><div><p className="text-body-tertiary mb-0 fs-9">{c.l}</p><h4 className="mb-0">{c.v}</h4></div></div></div></div>)}
    </div>
    <div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">Inventory Turnover Rate</h5></div><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
      <thead><tr><th className="ps-3">CATEGORY</th><th className="text-center">TURNOVER RATE</th><th className="text-center">AVG DAYS TO SELL</th><th className="ps-3" style={{width:'40%'}}>PERFORMANCE</th></tr></thead>
      <tbody>{inventoryReportData.turnoverRate.map((c,i)=><tr key={i}><td className="align-middle ps-3 fw-semibold">{c.category}</td><td className="align-middle text-center">{c.rate}x</td><td className="align-middle text-center">{c.avgDaysToSell} days</td>
        <td className="align-middle ps-3"><div className="progress" style={{height:8}}><div className={`progress-bar ${c.rate>3?'bg-success':c.rate>1.5?'bg-primary':'bg-warning'}`} style={{width:`${Math.min(c.rate*20,100)}%`}}></div></div></td></tr>)}</tbody>
    </table></div></div></div></div></>);
}
