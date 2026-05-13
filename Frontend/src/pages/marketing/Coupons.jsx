import { useState, useEffect, useCallback } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { couponService } from '../../services/api';

export default function Coupons() {
  usePhoenixInit();
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusF, setStatusF] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ code: '', type: 'percentage', amount: '', min_purchase: '', max_discount: '', usage_limit: '', expires_at: '', is_active: true });
  const [saving, setSaving] = useState(false);

  const fetchCoupons = useCallback(async () => {
    try { setLoading(true); const res = await couponService.getAll(); setCoupons(res.data || []); }
    catch (err) { console.error(err); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchCoupons(); }, [fetchCoupons]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const isActive = (c) => c.is_active && (!c.expires_at || new Date(c.expires_at) > new Date());
  const filtered = statusF === 'active' ? coupons.filter(isActive) : statusF === 'expired' ? coupons.filter(c => !isActive(c)) : coupons;

  const handleSubmit = async (e) => {
    e.preventDefault(); setSaving(true);
    try {
      const payload = { ...form, amount: parseFloat(form.amount) || 0 };
      if (form.min_purchase) payload.min_purchase = parseFloat(form.min_purchase);
      if (form.max_discount) payload.max_discount = parseFloat(form.max_discount);
      if (form.usage_limit) payload.usage_limit = parseInt(form.usage_limit);
      if (editId) await couponService.update(editId, payload);
      else await couponService.create(payload);
      setShowForm(false); setEditId(null);
      setForm({ code: '', type: 'percentage', amount: '', min_purchase: '', max_discount: '', usage_limit: '', expires_at: '', is_active: true });
      await fetchCoupons();
    } catch (err) { alert(err.message || 'Failed to save'); }
    finally { setSaving(false); }
  };

  const handleEdit = (c) => {
    setEditId(c.id);
    setForm({ code: c.code, type: c.type, amount: c.amount, min_purchase: c.min_purchase || '', max_discount: c.max_discount || '', usage_limit: c.usage_limit || '', expires_at: c.expires_at ? c.expires_at.split('T')[0] : '', is_active: c.is_active });
    setShowForm(true);
  };

  const handleDelete = async (id) => { if (!confirm('Delete?')) return; try { await couponService.delete(id); await fetchCoupons(); } catch (err) { alert(err.message); } };

  if (loading) return <div className="d-flex justify-content-center py-9"><div className="spinner-border text-primary" role="status"></div></div>;

  return (<>
    <nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Coupons</li></ol></nav>
    <div className="mb-9">
      <div className="d-flex justify-content-between mb-4">
        <h2 className="mb-0">🎟️ Coupons &amp; Discounts</h2>
        <button className="btn btn-primary" onClick={() => { setShowForm(true); setEditId(null); setForm({ code: '', type: 'percentage', amount: '', min_purchase: '', max_discount: '', usage_limit: '', expires_at: '', is_active: true }); }}><span className="fas fa-plus me-2"></span>Add Coupon</button>
      </div>
      <div className="d-flex gap-2 mb-4">
        <button className={`btn ${!statusF ? 'btn-primary' : 'btn-phoenix-secondary'}`} onClick={() => setStatusF('')}>All ({coupons.length})</button>
        <button className={`btn ${statusF === 'active' ? 'btn-primary' : 'btn-phoenix-secondary'}`} onClick={() => setStatusF('active')}>Active ({coupons.filter(isActive).length})</button>
        <button className={`btn ${statusF === 'expired' ? 'btn-primary' : 'btn-phoenix-secondary'}`} onClick={() => setStatusF('expired')}>Expired ({coupons.filter(c => !isActive(c)).length})</button>
      </div>

      {showForm && (
        <div className="card border border-translucent mb-4"><div className="card-body">
          <h5 className="mb-3">{editId ? 'Edit' : 'Add'} Coupon</h5>
          <form onSubmit={handleSubmit}><div className="row g-3">
            <div className="col-md-3"><label className="form-label">Code</label><input className="form-control text-uppercase font-monospace" value={form.code} onChange={e => setForm({...form, code: e.target.value.toUpperCase()})} required /></div>
            <div className="col-md-2"><label className="form-label">Type</label><select className="form-select" value={form.type} onChange={e => setForm({...form, type: e.target.value})}><option value="percentage">Percentage</option><option value="fixed">Fixed</option></select></div>
            <div className="col-md-2"><label className="form-label">Amount</label><input className="form-control" type="number" step="0.01" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} required /></div>
            <div className="col-md-2"><label className="form-label">Min Purchase</label><input className="form-control" type="number" value={form.min_purchase} onChange={e => setForm({...form, min_purchase: e.target.value})} /></div>
            <div className="col-md-3"><label className="form-label">Expires At</label><input className="form-control" type="date" value={form.expires_at} onChange={e => setForm({...form, expires_at: e.target.value})} /></div>
            <div className="col-auto d-flex align-items-end"><button className="btn btn-primary me-2" type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save'}</button><button className="btn btn-phoenix-secondary" type="button" onClick={() => setShowForm(false)}>Cancel</button></div>
          </div></form>
        </div></div>
      )}

      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
        <thead><tr><th>CODE</th><th>TYPE</th><th className="text-center">AMOUNT</th><th className="text-center">MIN PURCHASE</th><th className="text-center">USED</th><th className="text-center">LIMIT</th><th>EXPIRY</th><th className="text-center">STATUS</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
        <tbody>{filtered.map(c => <tr key={c.id}>
          <td className="align-middle fw-bold font-monospace">{c.code}</td>
          <td className="align-middle"><span className="badge badge-phoenix-info">{c.type}</span></td>
          <td className="align-middle text-center fw-semibold">{c.type === 'percentage' ? `${c.amount}%` : `₹${Number(c.amount).toLocaleString('en-IN')}`}</td>
          <td className="align-middle text-center">{c.min_purchase ? `₹${Number(c.min_purchase).toLocaleString('en-IN')}` : '-'}</td>
          <td className="align-middle text-center">{c.used_count}</td>
          <td className="align-middle text-center">{c.usage_limit || '∞'}</td>
          <td className="align-middle text-body-tertiary">{c.expires_at ? new Date(c.expires_at).toLocaleDateString('en-IN') : 'Never'}</td>
          <td className="align-middle text-center"><span className={`badge ${isActive(c) ? 'badge-phoenix-success' : 'badge-phoenix-secondary'}`}>{isActive(c) ? 'Active' : 'Expired'}</span></td>
          <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary me-1" onClick={() => handleEdit(c)}><span className="fas fa-edit"></span></button><button className="btn btn-sm btn-phoenix-danger" onClick={() => handleDelete(c.id)}><span className="fas fa-trash"></span></button></td>
        </tr>)}</tbody>
      </table></div></div>
    </div>
  </>);
}
