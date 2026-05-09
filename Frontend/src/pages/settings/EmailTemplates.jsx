import usePhoenixInit from '../../hooks/usePhoenixInit';
import { emailTemplates } from '../../data/settingsData';
export default function EmailTemplates() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Email Templates</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">📧 Email Templates</h2>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>TEMPLATE</th><th>SUBJECT</th><th>TRIGGER</th><th className="text-center">STATUS</th><th>LAST EDITED</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
      <tbody>{emailTemplates.map(t=><tr key={t.id}><td className="align-middle fw-semibold">{t.name}</td><td className="align-middle text-body-tertiary" style={{maxWidth:200}}>{t.subject}</td>
        <td className="align-middle"><span className="badge badge-phoenix-info">{t.trigger}</span></td>
        <td className="align-middle text-center"><span className="badge badge-phoenix-success">{t.status}</span></td><td className="align-middle text-body-tertiary">{t.lastEdited}</td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-secondary me-1"><span className="fas fa-eye"></span></button><button className="btn btn-sm btn-phoenix-primary"><span className="fas fa-edit"></span></button></td></tr>)}</tbody>
    </table></div></div></div></>);
}
