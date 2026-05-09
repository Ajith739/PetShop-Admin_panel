import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { petCategories } from '../../data/petsData';

export default function Categories() {
  usePhoenixInit();
  const [showAdd, setShowAdd] = useState(false);
  useEffect(() => { if (window.feather) window.feather.replace(); });

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
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">📂 Pet Categories</h2></div>
          <div className="col-auto ms-auto">
            <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)}>
              <span className="fas fa-plus me-2"></span>Add Category
            </button>
          </div>
        </div>

        {showAdd && (
          <div className="card mb-4 border border-translucent">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4"><label className="form-label">Category Name</label><input className="form-control" placeholder="e.g., Rabbits" /></div>
                <div className="col-md-2"><label className="form-label">Icon</label><input className="form-control" placeholder="🐰" /></div>
                <div className="col-md-3"><label className="form-label">Slug</label><input className="form-control" placeholder="rabbits" /></div>
                <div className="col-md-3"><label className="form-label">Status</label><select className="form-select"><option>Active</option><option>Inactive</option></select></div>
                <div className="col-12"><label className="form-label">Description</label><textarea className="form-control" rows="2" placeholder="Category description"></textarea></div>
                <div className="col-12"><button className="btn btn-primary me-2">Save</button><button className="btn btn-phoenix-secondary" onClick={() => setShowAdd(false)}>Cancel</button></div>
              </div>
            </div>
          </div>
        )}

        <div className="row g-3">
          {petCategories.map(cat => (
            <div key={cat.id} className="col-md-4 col-lg-3">
              <div className="card border border-translucent h-100">
                <div className="card-body text-center">
                  <span className="fs-3 d-block mb-2">{cat.icon}</span>
                  <h5 className="mb-1">{cat.name}</h5>
                  <p className="text-body-tertiary fs-9 mb-2">{cat.description}</p>
                  <span className="badge badge-phoenix-info mb-3">{cat.petCount} pets</span>
                  <div>
                    <span className={`badge ${cat.status === 'active' ? 'badge-phoenix-success' : 'badge-phoenix-secondary'}`}>{cat.status}</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top border-translucent text-center">
                  <button className="btn btn-sm btn-phoenix-primary me-2"><span className="fas fa-edit"></span></button>
                  <button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
