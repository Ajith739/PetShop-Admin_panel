import usePhoenixInit from '../../hooks/usePhoenixInit';
import { stockAlerts } from '../../data/inventoryData';
export default function StockAlerts() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Stock Alerts</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">⚠️ Stock Alerts</h2>
    <div className="alert alert-phoenix-danger mb-4"><strong>{stockAlerts.filter(s=>s.status==='out-of-stock').length}</strong> items are out of stock and <strong>{stockAlerts.filter(s=>s.status==='low-stock').length}</strong> items are running low.</div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>NAME</th><th>SKU</th><th className="text-center">STOCK</th><th className="text-center">MIN</th><th className="text-center">STATUS</th><th className="text-end pe-0">ACTION</th></tr></thead>
      <tbody>{stockAlerts.map(s => (<tr key={s.id}><td className="align-middle fw-semibold">{s.name}</td><td className="align-middle text-body-tertiary">{s.sku}</td>
        <td className="align-middle text-center fw-bold">{s.currentStock}</td><td className="align-middle text-center">{s.minStock}</td>
        <td className="align-middle text-center"><span className={`badge ${s.status==='out-of-stock'?'badge-phoenix-danger':'badge-phoenix-warning'}`}>{s.status.replace('-',' ')}</span></td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary">Restock</button></td></tr>))}</tbody>
    </table></div></div></div></>);
}
