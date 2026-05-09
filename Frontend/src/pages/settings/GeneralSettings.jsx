import usePhoenixInit from '../../hooks/usePhoenixInit';
import { generalSettings } from '../../data/settingsData';
export default function GeneralSettings() { usePhoenixInit();
  const s = generalSettings;
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">General Settings</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">⚙️ General Settings</h2>
    <div className="card border border-translucent"><div className="card-body">
      <div className="row g-3">
        <div className="col-md-6"><label className="form-label">Site Name</label><input className="form-control" defaultValue={s.siteName} /></div>
        <div className="col-md-6"><label className="form-label">Tagline</label><input className="form-control" defaultValue={s.tagline} /></div>
        <div className="col-12"><label className="form-label">Logo</label><div className="d-flex align-items-center gap-3"><img src={s.logo} alt="Logo" width="40" /><input className="form-control" type="file" accept="image/*" /></div></div>
        <div className="col-md-6"><label className="form-label">Contact Email</label><input className="form-control" type="email" defaultValue={s.contactEmail} /></div>
        <div className="col-md-6"><label className="form-label">Contact Phone</label><input className="form-control" defaultValue={s.contactPhone} /></div>
        <div className="col-12"><label className="form-label">Address</label><textarea className="form-control" rows="2" defaultValue={s.address}></textarea></div>
        <div className="col-md-6"><label className="form-label">Currency</label><select className="form-select" defaultValue={s.currency}><option>INR (₹)</option><option>USD ($)</option></select></div>
        <div className="col-md-6"><label className="form-label">Timezone</label><select className="form-select" defaultValue={s.timezone}><option>Asia/Kolkata (IST)</option><option>UTC</option></select></div>
        <div className="col-12"><button className="btn btn-primary"><span className="fas fa-save me-2"></span>Save Settings</button></div>
      </div></div></div></div></>);
}
