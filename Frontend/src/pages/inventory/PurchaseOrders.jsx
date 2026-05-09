import usePhoenixInit from '../../hooks/usePhoenixInit';
import { purchaseOrders } from '../../data/inventoryData';
export default function PurchaseOrders() { usePhoenixInit();
  const statusBadge = (s) => ({Received:'badge-phoenix-success',Sent:'badge-phoenix-info',Draft:'badge-phoenix-secondary'}[s]||'badge-phoenix-secondary');
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Purchase Orders</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">📋 Purchase Orders</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>New PO</button></div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>PO NUMBER</th><th>SUPPLIER</th><th>DATE</th><th className="text-center">ITEMS</th><th className="text-end">TOTAL</th><th className="text-center">STATUS</th><th>RECEIVED</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
      <tbody>{purchaseOrders.map(p => (<tr key={p.id}><td className="align-middle fw-semibold">{p.id}</td><td className="align-middle text-body-tertiary">{p.supplier}</td><td className="align-middle text-body-tertiary">{p.date}</td>
        <td className="align-middle text-center">{p.items}</td><td className="align-middle text-end fw-bold">₹{p.total.toLocaleString()}</td>
        <td className="align-middle text-center"><span className={`badge ${statusBadge(p.status)}`}>{p.status}</span></td><td className="align-middle text-body-tertiary">{p.receivedDate||'—'}</td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-eye"></span></button><button className="btn btn-sm btn-phoenix-secondary"><span className="fas fa-edit"></span></button></td></tr>))}</tbody>
    </table></div></div></div></>);
}
