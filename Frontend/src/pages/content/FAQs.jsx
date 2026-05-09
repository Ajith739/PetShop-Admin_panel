import usePhoenixInit from '../../hooks/usePhoenixInit';
import { faqsData } from '../../data/contentData';
export default function FAQs() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">FAQs</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">❓ FAQs</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add FAQ</button></div>
    {faqsData.map(f=><div key={f.id} className="card mb-3 border border-translucent"><div className="card-body">
      <div className="d-flex justify-content-between align-items-start">
        <div className="flex-1">
          <div className="d-flex align-items-center gap-2 mb-2"><span className="badge badge-phoenix-info">{f.category}</span><span className={`badge ${f.status==='Published'?'badge-phoenix-success':'badge-phoenix-secondary'}`}>{f.status}</span><span className="text-body-quaternary fs-10">Order: {f.sortOrder}</span></div>
          <h6 className="mb-1">Q: {f.question}</h6><p className="text-body-tertiary mb-0">A: {f.answer}</p>
        </div>
        <div className="ms-3 d-flex gap-1"><button className="btn btn-sm btn-phoenix-primary"><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button></div>
      </div></div></div>)}</div></>);
}
