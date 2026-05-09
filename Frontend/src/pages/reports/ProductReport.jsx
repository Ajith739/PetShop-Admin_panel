import usePhoenixInit from '../../hooks/usePhoenixInit';
import { productReportData } from '../../data/reportsData';
export default function ProductReport() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Product Report</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">📦 Product Report</h2>
    <div className="d-flex flex-wrap gap-3 mb-4"><input className="form-control" type="date" style={{width:'auto'}} /><span className="align-self-center">to</span><input className="form-control" type="date" style={{width:'auto'}} />
      <div className="ms-auto"><button className="btn btn-phoenix-secondary me-2"><span className="fas fa-file-pdf me-2"></span>PDF</button><button className="btn btn-phoenix-secondary"><span className="fas fa-file-excel me-2"></span>Excel</button></div></div>
    <div className="card mb-4 border border-translucent"><div className="card-header"><h5 className="mb-0">🏆 Top Selling Products</h5></div><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
      <thead><tr><th className="ps-3">PRODUCT</th><th>CATEGORY</th><th className="text-center">UNITS SOLD</th><th className="text-end">REVENUE</th><th className="text-center pe-3">STOCK LEFT</th></tr></thead>
      <tbody>{productReportData.topSelling.map((p,i)=><tr key={i}><td className="align-middle ps-3 fw-semibold">{p.name}</td><td className="align-middle text-body-tertiary">{p.category}</td>
        <td className="align-middle text-center">{p.sold}</td><td className="align-middle text-end fw-bold">₹{p.revenue.toLocaleString()}</td>
        <td className="align-middle text-center"><span className={`badge ${p.stock>10?'badge-phoenix-success':p.stock>0?'badge-phoenix-warning':'badge-phoenix-danger'}`}>{p.stock}</span></td></tr>)}</tbody>
    </table></div></div></div>
    <div className="card border border-translucent"><div className="card-header"><h5 className="mb-0">📉 Low Performing Products</h5></div><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
      <thead><tr><th className="ps-3">PRODUCT</th><th>CATEGORY</th><th className="text-center">UNITS SOLD</th><th className="text-end">REVENUE</th><th className="text-center pe-3">STOCK</th></tr></thead>
      <tbody>{productReportData.lowPerforming.map((p,i)=><tr key={i}><td className="align-middle ps-3 fw-semibold">{p.name}</td><td className="align-middle text-body-tertiary">{p.category}</td>
        <td className="align-middle text-center">{p.sold}</td><td className="align-middle text-end">₹{p.revenue.toLocaleString()}</td>
        <td className="align-middle text-center">{p.stock}</td></tr>)}</tbody>
    </table></div></div></div></div></>);
}
