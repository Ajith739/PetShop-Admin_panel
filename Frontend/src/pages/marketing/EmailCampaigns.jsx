import usePhoenixInit from '../../hooks/usePhoenixInit';
import { emailCampaigns } from '../../data/marketingData';
export default function EmailCampaigns() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Email Campaigns</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">📧 Email Campaigns</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>New Campaign</button></div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>CAMPAIGN</th><th>SUBJECT</th><th className="text-center">RECIPIENTS</th><th>SENT DATE</th><th className="text-center">OPEN RATE</th><th className="text-center">CLICK RATE</th><th className="text-center">STATUS</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
      <tbody>{emailCampaigns.map(c=><tr key={c.id}><td className="align-middle fw-semibold">{c.name}</td><td className="align-middle text-body-tertiary" style={{maxWidth:200}}>{c.subject}</td>
        <td className="align-middle text-center">{c.recipients.toLocaleString()}</td><td className="align-middle text-body-tertiary">{c.sentDate||'—'}</td>
        <td className="align-middle text-center">{c.openRate?`${c.openRate}%`:'—'}</td><td className="align-middle text-center">{c.clickRate?`${c.clickRate}%`:'—'}</td>
        <td className="align-middle text-center"><span className={`badge ${c.status==='Sent'?'badge-phoenix-success':c.status==='Scheduled'?'badge-phoenix-info':'badge-phoenix-secondary'}`}>{c.status}</span></td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-eye"></span></button><button className="btn btn-sm btn-phoenix-secondary"><span className="fas fa-edit"></span></button></td></tr>)}</tbody>
    </table></div></div></div></>);
}
