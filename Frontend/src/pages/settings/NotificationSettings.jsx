import { useState } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { notificationSettings as initialSettings } from '../../data/settingsData';
export default function NotificationSettings() { usePhoenixInit();
  const [settings, setSettings] = useState(initialSettings);
  const toggle = (idx, field) => setSettings(prev => prev.map((s,i) => i===idx ? {...s,[field]:!s[field]} : s));
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Notifications</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">🔔 Notification Settings</h2>
    <div className="card border border-translucent"><div className="card-body p-0"><div className="table-responsive"><table className="table fs-9 mb-0">
      <thead><tr><th className="ps-3">EVENT</th><th className="text-center">📧 EMAIL</th><th className="text-center">📱 SMS</th><th className="text-center">🔔 PUSH</th><th className="text-center">👤 ADMIN</th></tr></thead>
      <tbody>{settings.map((s,i)=><tr key={i}><td className="align-middle ps-3 fw-semibold">{s.event}</td>
        {['email','sms','push','admin'].map(f=><td key={f} className="align-middle text-center"><div className="form-check d-flex justify-content-center mb-0"><input className="form-check-input" type="checkbox" checked={s[f]} onChange={()=>toggle(i,f)} /></div></td>)}
      </tr>)}</tbody>
    </table></div></div></div>
    <button className="btn btn-primary mt-3"><span className="fas fa-save me-2"></span>Save Settings</button></div></>);
}
