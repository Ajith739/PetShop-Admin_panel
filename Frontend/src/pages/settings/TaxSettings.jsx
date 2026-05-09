import usePhoenixInit from '../../hooks/usePhoenixInit';
import { taxSettings } from '../../data/settingsData';
export default function TaxSettings() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Tax Settings</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">🧾 Tax Settings</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Tax Zone</button></div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>TAX NAME</th><th className="text-center">RATE</th><th className="text-center">TYPE</th><th>CATEGORY</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
      <tbody>{taxSettings.map(t=><tr key={t.id}><td className="align-middle fw-semibold">{t.name}</td><td className="align-middle text-center fw-bold">{t.rate}%</td>
        <td className="align-middle text-center"><span className={`badge ${t.type==='Exempt'?'badge-phoenix-success':'badge-phoenix-info'}`}>{t.type}</span></td>
        <td className="align-middle text-body-tertiary">{t.category}</td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button></td></tr>)}</tbody>
    </table></div></div></div></>);
}
