import { useState, useEffect, useCallback } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { categoryService } from '../../services/api';

export default function Categories() {
  usePhoenixInit();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', slug: '', description: '', image: '', is_active: true });
  const [saving, setSaving] = useState(false);

  const icons = { Dogs: '🐕', Cats: '🐱', Fish: '🐠', Birds: '🐦', Reptiles: '🦎', 'Small Animals': '🐹' };

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const res = await categoryService.getAll();
      setCategories(Array.isArray(res) ? res : (res.data || []));
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchCategories(); }, [fetchCategories]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const handleEdit = (cat) => {
    setEditId(cat.id);
    setForm({ name: cat.name, slug: cat.slug, description: cat.description || '', image: cat.image || '', is_active: cat.is_active ?? true });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editId) {
        await categoryService.update(editId, form);
      } else {
        await categoryService.create(form);
      }
      setShowForm(false);
      setEditId(null);
      setForm({ name: '', slug: '', description: '', image: '', is_active: true });
      await fetchCategories();
    } catch (err) {
      alert(err.message || 'Failed to save category');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this category?')) return;
    try {
      await categoryService.delete(id);
      await fetchCategories();
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
          <li className="breadcrumb-item active">Categories</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">📂 Pet Categories</h2>
          <button className="btn btn-primary" onClick={() => { setShowForm(true); setEditId(null); setForm({ name: '', slug: '', description: '', image: '', is_active: true }); }}>
            <span className="fas fa-plus me-2"></span>Add Category
          </button>
        </div>

        {showForm && (
          <div className="card border border-translucent mb-4">
            <div className="card-body">
              <h5 className="mb-3">{editId ? 'Edit' : 'Add'} Category</h5>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Slug</label>
                    <input className="form-control" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="2" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
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

        <div className="row g-3">
          {categories.map(cat => (
            <div key={cat.id} className="col-md-4">
              <div className="card border border-translucent h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1"><span className="me-2">{icons[cat.name] || '📁'}</span>{cat.name}</h5>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-phoenix-secondary dropdown-toggle dropdown-caret-none" data-bs-toggle="dropdown">
                        <span className="fas fa-ellipsis-h"></span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleEdit(cat); }}>Edit</a>
                        <a className="dropdown-item text-danger" href="#" onClick={(e) => { e.preventDefault(); handleDelete(cat.id); }}>Delete</a>
                      </div>
                    </div>
                  </div>
                  <p className="text-body-tertiary fs-9 mb-1">{cat.description || 'No description'}</p>
                  <span className={`badge ${cat.is_active ? 'badge-phoenix-success' : 'badge-phoenix-secondary'}`}>
                    {cat.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
