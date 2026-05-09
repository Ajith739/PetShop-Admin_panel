import { useState } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { couponsData } from '../../data/marketingData';
export default function Coupons() { usePhoenixInit();
  const [statusF, setStatusF] = useState('');
  const filtered = statusF ? couponsData.filter(c => c.status === statusF) : couponsData;
  return (<><nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Coupons</li></ol></nav>
    <div className="mb-9"><div className="d-flex justify-content-between mb-4"><h2 className="mb-0">🎟️ Coupons & Discounts</h2><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Coupon</button></div>
    <div className="d-flex gap-2 mb-4">
      <button className={`btn ${!statusF?'btn-primary':'btn-phoenix-secondary'}`} onClick={()=>setStatusF('')}>All ({couponsData.length})</button>
      <button className={`btn ${statusF==='Active'?'btn-primary':'btn-phoenix-secondary'}`} onClick={()=>setStatusF('Active')}>Active ({couponsData.filter(c=>c.status==='Active').length})</button>
      <button className={`btn ${statusF==='Expired'?'btn-primary':'btn-phoenix-secondary'}`} onClick={()=>setStatusF('Expired')}>Expired ({couponsData.filter(c=>c.status==='Expired').length})</button>
    </div>
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
      <thead><tr><th>CODE</th><th>TYPE</th><th className="text-center">AMOUNT</th><th className="text-center">MIN PURCHASE</th><th className="text-center">USED</th><th className="text-center">LIMIT</th><th>EXPIRY</th><th>APPLIES TO</th><th className="text-center">STATUS</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
      <tbody>{filtered.map(c=><tr key={c.id}><td className="align-middle fw-bold font-monospace">{c.code}</td><td className="align-middle"><span className="badge badge-phoenix-info">{c.type}</span></td>
        <td className="align-middle text-center fw-semibold">{c.type==='Percentage'?`${c.amount}%`:`₹${c.amount}`}</td><td className="align-middle text-center">₹{c.minPurchase.toLocaleString()}</td>
        <td className="align-middle text-center">{c.usedCount}</td><td className="align-middle text-center">{c.usageLimit}</td><td className="align-middle text-body-tertiary">{c.expiry}</td>
        <td className="align-middle text-body-tertiary">{c.applicableTo}</td><td className="align-middle text-center"><span className={`badge ${c.status==='Active'?'badge-phoenix-success':'badge-phoenix-secondary'}`}>{c.status}</span></td>
        <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button></td></tr>)}</tbody>
    </table></div></div></div></>);
}
