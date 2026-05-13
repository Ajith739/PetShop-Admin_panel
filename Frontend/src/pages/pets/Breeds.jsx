import { useState, useEffect, useCallback } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { breedService, categoryService } from '../../services/api';

export default function Breeds() {
  usePhoenixInit();
  const [breeds, setBreeds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ pet_category_id: '', name: '', slug: '', description: '' });
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState('');

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [bRes, cRes] = await Promise.all([breedService.getAll(), categoryService.getAll()]);
      setBreeds(bRes.data || []);
      setCategories(Array.isArray(cRes) ? cRes : (cRes.data || []));
    } catch (err) {
      console.error('Failed to fetch breeds:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const catMap = {};
  categories.forEach(c => { catMap[c.id] = c.name; });

  const filtered = filter ? breeds.filter(b => b.pet_category_id === parseInt(filter)) : breeds;

  const handleEdit = (breed) => {
    setEditId(breed.id);
    setForm({ pet_category_id: breed.pet_category_id, name: breed.name, slug: breed.slug, description: breed.description || '' });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editId) {
        await breedService.update(editId, form);
      } else {
        // Backend expects array for store
        await breedService.create([form]);
      }
      setShowForm(false);
      setEditId(null);
      setForm({ pet_category_id: '', name: '', slug: '', description: '' });
      await fetchData();
    } catch (err) {
      alert(err.message || 'Failed to save breed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this breed?')) return;
    try {
      await breedService.delete(id);
      await fetchData();
    } catch (err) {
      alert(err.message || 'Failed to delete');
    }
  };

  if (loading) {
    return <div className="d-flex justify-content-center py-9"><div className="spinner-border text-primary" role="status"></div></div>;
  }

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pets">Pets</a></li>
          <li className="breadcrumb-item active">Breeds</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">🧬 Breeds</h2>
          <button className="btn btn-primary" onClick={() => { setShowForm(true); setEditId(null); setForm({ pet_category_id: categories[0]?.id || '', name: '', slug: '', description: '' }); }}>
            <span className="fas fa-plus me-2"></span>Add Breed
          </button>
        </div>

        <div className="d-flex gap-3 mb-4">
          <select className="form-select" style={{width: 'auto'}} value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <span className="text-body-tertiary align-self-center fs-9">{filtered.length} breeds</span>
        </div>

        {showForm && (
          <div className="card border border-translucent mb-4">
            <div className="card-body">
              <h5 className="mb-3">{editId ? 'Edit' : 'Add'} Breed</h5>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Category</label>
                    <select className="form-select" value={form.pet_category_id} onChange={e => setForm({...form, pet_category_id: parseInt(e.target.value)})} required>
                      <option value="">Select...</option>
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Name</label>
                    <input className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} required />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Slug</label>
                    <input className="form-control" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <input className="form-control" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary me-2" type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
                    <button className="btn btn-phoenix-secondary" type="button" onClick={() => setShowForm(false)}>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="table-responsive">
          <table className="table table-sm fs-9 mb-0">
            <thead><tr><th>BREED</th><th>CATEGORY</th><th>SLUG</th><th className="text-end">ACTIONS</th></tr></thead>
            <tbody>
              {filtered.map(b => (
                <tr key={b.id}>
                  <td className="fw-semibold">{b.name}</td>
                  <td><span className="badge badge-phoenix-info">{catMap[b.pet_category_id] || 'N/A'}</span></td>
                  <td className="text-body-tertiary">{b.slug}</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-phoenix-secondary me-1" onClick={() => handleEdit(b)}><span className="fas fa-edit"></span></button>
                    <button className="btn btn-sm btn-phoenix-danger" onClick={() => handleDelete(b.id)}><span className="fas fa-trash"></span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
