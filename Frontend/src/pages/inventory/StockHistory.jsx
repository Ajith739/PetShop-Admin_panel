import usePhoenixInit from '../../hooks/usePhoenixInit';
import { stockHistory } from '../../data/inventoryData';
export default function StockHistory() { usePhoenixInit();
  const actionBadge = (a) => ({Added:'badge-phoenix-success',Sold:'badge-phoenix-info',Returned:'badge-phoenix-warning',Adjusted:'badge-phoenix-secondary'}[a]||'badge-phoenix-secondary');
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Stock History</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">📜 Stock History</h2>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>DATE</th><th>PRODUCT</th><th>SKU</th><th className="text-center">ACTION</th><th className="text-center">CHANGE</th><th className="text-center">BALANCE</th><th>USER</th></tr></thead>
      <tbody>{stockHistory.map(h => (<tr key={h.id}><td className="align-middle text-body-tertiary">{h.date}</td><td className="align-middle fw-semibold">{h.product}</td><td className="align-middle text-body-tertiary">{h.sku}</td>
        <td className="align-middle text-center"><span className={`badge ${actionBadge(h.action)}`}>{h.action}</span></td>
        <td className={`align-middle text-center fw-bold ${h.change>0?'text-success':h.change<0?'text-danger':''}`}>{h.change>0?'+':''}{h.change}</td>
        <td className="align-middle text-center">{h.newBalance}</td><td className="align-middle text-body-tertiary">{h.user}</td></tr>))}</tbody>
    </table></div></div></div></>);
}
