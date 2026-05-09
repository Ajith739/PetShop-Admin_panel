import usePhoenixInit from '../../hooks/usePhoenixInit';
import { roles } from '../../data/settingsData';
export default function RolesPermissions() { usePhoenixInit();
  const permLabels = {dashboard:'Dashboard',pets:'Pets',products:'Products',orders:'Orders',customers:'Customers',inventory:'Inventory',reports:'Reports',marketing:'Marketing',content:'Content',settings:'Settings'};
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Roles & Permissions</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">🔐 Roles & Permissions</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Role</button></div>
    <div className="card border border-translucent"><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
      <thead><tr><th className="ps-3">ROLE</th><th className="text-center">USERS</th>
        {Object.keys(permLabels).map(k=><th key={k} className="text-center fs-10">{permLabels[k]}</th>)}
        <th className="text-end pe-3">ACTIONS</th></tr></thead>
      <tbody>{roles.map(r=><tr key={r.id}><td className="align-middle ps-3 fw-semibold">{r.name}</td><td className="align-middle text-center"><span className="badge badge-phoenix-info">{r.users}</span></td>
        {Object.keys(permLabels).map(k=><td key={k} className="align-middle text-center">{r.permissions[k]?<span className="fas fa-check text-success"></span>:<span className="fas fa-times text-danger"></span>}</td>)}
        <td className="align-middle text-end pe-3"><button className="btn btn-sm btn-phoenix-primary"><span className="fas fa-edit"></span></button></td></tr>)}</tbody>
    </table></div></div></div></div></>);
}
