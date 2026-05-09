import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';

const productCategories = [
  { id: 1, name: 'Pet Food', icon: '🍖', slug: 'pet-food', subCategories: ['Dog Food', 'Cat Food', 'Fish Food', 'Bird Food'], productCount: 45, status: 'active' },
  { id: 2, name: 'Toys', icon: '🧸', slug: 'toys', subCategories: ['Chew Toys', 'Interactive', 'Plush', 'Fetch'], productCount: 32, status: 'active' },
  { id: 3, name: 'Accessories', icon: '🎀', slug: 'accessories', subCategories: ['Collars', 'Leashes', 'Carriers', 'Beds', 'Bowls'], productCount: 28, status: 'active' },
  { id: 4, name: 'Medicine', icon: '💊', slug: 'medicine', subCategories: ['Flea & Tick', 'Deworming', 'Supplements', 'First Aid'], productCount: 18, status: 'active' },
  { id: 5, name: 'Aquariums', icon: '🐠', slug: 'aquariums', subCategories: ['Tanks', 'Filters', 'Lighting', 'Décor', 'Pumps'], productCount: 22, status: 'active' },
  { id: 6, name: 'Cages', icon: '🏠', slug: 'cages', subCategories: ['Bird Cages', 'Hamster Cages', 'Reptile Terrariums'], productCount: 15, status: 'active' },
  { id: 7, name: 'Grooming', icon: '✂️', slug: 'grooming', subCategories: ['Shampoo', 'Brushes', 'Clippers', 'Nail Care'], productCount: 20, status: 'active' },
  { id: 8, name: 'Treats', icon: '🦴', slug: 'treats', subCategories: ['Dog Treats', 'Cat Treats', 'Training Treats'], productCount: 25, status: 'active' },
];

export default function ProductCategories() {
  usePhoenixInit();
  const [showAdd, setShowAdd] = useState(false);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/products">Products</a></li>
          <li className="breadcrumb-item active">Categories</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">📦 Product Categories</h2></div>
          <div className="col-auto ms-auto">
            <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)}><span className="fas fa-plus me-2"></span>Add Category</button>
          </div>
        </div>
        {showAdd && (
          <div className="card mb-4 border border-translucent">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4"><label className="form-label">Name</label><input className="form-control" placeholder="e.g., Training" /></div>
                <div className="col-md-2"><label className="form-label">Icon</label><input className="form-control" placeholder="🎯" /></div>
                <div className="col-md-3"><label className="form-label">Slug</label><input className="form-control" placeholder="training" /></div>
                <div className="col-md-3"><label className="form-label">Status</label><select className="form-select"><option>Active</option><option>Inactive</option></select></div>
                <div className="col-12"><button className="btn btn-primary me-2">Save</button><button className="btn btn-phoenix-secondary" onClick={() => setShowAdd(false)}>Cancel</button></div>
              </div>
            </div>
          </div>
        )}
        <div className="row g-3">
          {productCategories.map(cat => (
            <div key={cat.id} className="col-md-4 col-lg-3">
              <div className="card border border-translucent h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <span className="fs-3 me-2">{cat.icon}</span>
                    <div>
                      <h6 className="mb-0">{cat.name}</h6>
                      <span className="badge badge-phoenix-info fs-10">{cat.productCount} products</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    {cat.subCategories.map(sub => (
                      <span key={sub} className="badge badge-phoenix badge-phoenix-secondary me-1 mb-1 fs-10">{sub}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top border-translucent">
                  <button className="btn btn-sm btn-phoenix-primary me-2"><span className="fas fa-edit"></span></button>
                  <button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button>
                  <span className={`badge float-end ${cat.status === 'active' ? 'badge-phoenix-success' : 'badge-phoenix-secondary'}`}>{cat.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
