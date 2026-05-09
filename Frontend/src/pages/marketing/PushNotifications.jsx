import usePhoenixInit from '../../hooks/usePhoenixInit';
import { pushNotifications } from '../../data/marketingData';
export default function PushNotifications() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Push Notifications</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">🔔 Push Notifications</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Send Notification</button></div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>TITLE</th><th>MESSAGE</th><th>AUDIENCE</th><th>SENT DATE</th><th className="text-center">DELIVERY</th><th className="text-center">STATUS</th></tr></thead>
      <tbody>{pushNotifications.map(n=><tr key={n.id}><td className="align-middle fw-semibold">{n.title}</td><td className="align-middle text-body-tertiary" style={{maxWidth:200}}>{n.message}</td>
        <td className="align-middle"><span className="badge badge-phoenix-info">{n.targetAudience}</span></td><td className="align-middle text-body-tertiary">{n.sentDate||'—'}</td>
        <td className="align-middle text-center">{n.deliveryRate?`${n.deliveryRate}%`:'—'}</td>
        <td className="align-middle text-center"><span className={`badge ${n.status==='Sent'?'badge-phoenix-success':'badge-phoenix-info'}`}>{n.status}</span></td></tr>)}</tbody>
    </table></div></div></div></>);
}
