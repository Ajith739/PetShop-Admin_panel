import usePhoenixInit from '../../hooks/usePhoenixInit';
import { blogPosts } from '../../data/contentData';
export default function BlogPosts() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Blog Posts</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">✍️ Blog Posts</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>New Post</button></div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>TITLE</th><th>CATEGORY</th><th>AUTHOR</th><th>DATE</th><th className="text-center">VIEWS</th><th className="text-center">STATUS</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
      <tbody>{blogPosts.map(p=><tr key={p.id}><td className="align-middle fw-semibold">{p.title}</td><td className="align-middle"><span className="badge badge-phoenix-info">{p.category}</span></td>
        <td className="align-middle text-body-tertiary">{p.author}</td><td className="align-middle text-body-tertiary">{p.publishedDate||'—'}</td>
        <td className="align-middle text-center">{p.views.toLocaleString()}</td><td className="align-middle text-center"><span className={`badge ${p.status==='Published'?'badge-phoenix-success':'badge-phoenix-secondary'}`}>{p.status}</span></td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button></td></tr>)}</tbody>
    </table></div></div></div></>);
}
