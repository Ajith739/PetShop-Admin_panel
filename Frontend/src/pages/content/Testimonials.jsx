import usePhoenixInit from '../../hooks/usePhoenixInit';
import { testimonialsData } from '../../data/contentData';
export default function Testimonials() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Testimonials</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">💬 Testimonials</h2>
    <div className="row g-3">{testimonialsData.map(t=><div key={t.id} className="col-md-6 col-lg-4"><div className="card border border-translucent h-100"><div className="card-body">
      <div className="d-flex justify-content-between mb-2"><span>{'⭐'.repeat(t.rating)}</span>
        <div><span className={`badge ${t.status==='Approved'?'badge-phoenix-success':'badge-phoenix-warning'}`}>{t.status}</span>{t.featured&&<span className="badge badge-phoenix-warning ms-1">Featured</span>}</div></div>
      <p className="text-body-tertiary mb-3">"{t.text}"</p>
      <div className="d-flex justify-content-between align-items-center"><div><h6 className="mb-0 fs-9">{t.customerName}</h6><span className="text-body-quaternary fs-10">{t.date}</span></div>
        <div><button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button></div></div>
    </div></div></div>)}</div></div></>);
}
