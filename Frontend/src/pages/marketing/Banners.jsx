import usePhoenixInit from '../../hooks/usePhoenixInit';
import { bannersData } from '../../data/marketingData';
export default function Banners() { usePhoenixInit();
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Banners</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">🖼️ Banners & Sliders</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Banner</button></div>
    <div className="row g-3">{bannersData.map(b=><div key={b.id} className="col-md-6 col-lg-4"><div className="card border border-translucent h-100"><div className="card-body">
      <div className="d-flex align-items-center mb-3"><span className="fs-3 me-2">{b.image}</span><div><h6 className="mb-0">{b.title}</h6><span className="text-body-tertiary fs-10">{b.position}</span></div>
        <span className={`badge ms-auto ${b.status==='Active'?'badge-phoenix-success':b.status==='Scheduled'?'badge-phoenix-info':'badge-phoenix-secondary'}`}>{b.status}</span></div>
      <div className="d-flex justify-content-between text-body-tertiary fs-10 mb-1"><span>Start:</span><span>{b.startDate}</span></div>
      <div className="d-flex justify-content-between text-body-tertiary fs-10"><span>End:</span><span>{b.endDate}</span></div>
    </div><div className="card-footer bg-transparent border-top border-translucent">
      <button className="btn btn-sm btn-phoenix-primary me-2"><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button>
    </div></div></div>)}</div></div></>);
}
