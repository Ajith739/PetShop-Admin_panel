import usePhoenixInit from '../../hooks/usePhoenixInit';
import { systemLogs } from '../../data/settingsData';
export default function SystemLogs() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">System Logs</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">📋 System Logs</h2><button className="btn btn-phoenix-danger"><span className="fas fa-trash me-2"></span>Clear Logs</button></div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>TIMESTAMP</th><th>USER</th><th>ACTION</th><th>IP ADDRESS</th><th>DETAILS</th></tr></thead>
      <tbody>{systemLogs.map(l=><tr key={l.id}><td className="align-middle text-body-tertiary white-space-nowrap">{l.timestamp}</td>
        <td className="align-middle"><span className={`badge ${l.user==='System'?'badge-phoenix-info':'badge-phoenix-secondary'}`}>{l.user}</span></td>
        <td className="align-middle fw-semibold">{l.action}</td><td className="align-middle text-body-tertiary font-monospace">{l.ip}</td>
        <td className="align-middle text-body-tertiary">{l.details}</td></tr>)}</tbody>
    </table></div></div></div></>);
}
