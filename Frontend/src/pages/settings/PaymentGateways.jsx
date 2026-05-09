import { useState } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { paymentGateways } from '../../data/settingsData';
export default function PaymentGateways() { usePhoenixInit();
  const [gateways, setGateways] = useState(paymentGateways);
  const toggle = (id) => setGateways(prev => prev.map(g => g.id === id ? {...g, enabled: !g.enabled} : g));
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Payment Gateways</li></ol></nav>
    <div className="mb-9"><h2 className="mb-4">💳 Payment Gateways</h2>
    <div className="row g-3">{gateways.map(g=><div key={g.id} className="col-md-6"><div className={`card border ${g.enabled?'border-success':'border-translucent'}`}><div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-3"><div className="d-flex align-items-center"><span className="fs-4 me-2">{g.icon}</span><div><h5 className="mb-0">{g.name}</h5><span className="text-body-tertiary fs-10">{g.description}</span></div></div>
        <div className="form-check form-switch"><input className="form-check-input" type="checkbox" checked={g.enabled} onChange={()=>toggle(g.id)} style={{width:40,height:20}} /></div></div>
      {g.keyId!=='N/A'&&<div className="row g-2"><div className="col-12"><label className="form-label fs-10">API Key</label><input className="form-control form-control-sm" defaultValue={g.keyId} disabled={!g.enabled} /></div>
        <div className="col-md-6"><label className="form-label fs-10">Mode</label><select className="form-select form-select-sm" disabled={!g.enabled} defaultValue={g.mode}><option>Live</option><option>Test</option><option>Sandbox</option></select></div></div>}
    </div></div></div>)}</div>
    <button className="btn btn-primary mt-3"><span className="fas fa-save me-2"></span>Save</button></div></>);
}
