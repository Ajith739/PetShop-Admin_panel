import usePhoenixInit from '../../hooks/usePhoenixInit';
import { pagesData } from '../../data/contentData';
export default function ContentPages() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Pages</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">📄 Pages</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Page</button></div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>TITLE</th><th>SLUG</th><th>AUTHOR</th><th>LAST UPDATED</th><th className="text-center">STATUS</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
      <tbody>{pagesData.map(p=><tr key={p.id}><td className="align-middle fw-semibold">{p.title}</td><td className="align-middle text-body-tertiary font-monospace">/{p.slug}</td>
        <td className="align-middle text-body-tertiary">{p.author}</td><td className="align-middle text-body-tertiary">{p.lastUpdated}</td>
        <td className="align-middle text-center"><span className={`badge ${p.status==='Published'?'badge-phoenix-success':'badge-phoenix-secondary'}`}>{p.status}</span></td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-secondary me-1"><span className="fas fa-eye"></span></button><button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button></td></tr>)}</tbody>
    </table></div></div></div></>);
}
