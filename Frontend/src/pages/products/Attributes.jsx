import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';

const attributesData = [
  { id: 1, name: 'Size', values: ['Small', 'Medium', 'Large', 'Extra Large'], usedInProducts: 34 },
  { id: 2, name: 'Color', values: ['Red', 'Blue', 'Green', 'Black', 'White', 'Pink', 'Brown'], usedInProducts: 28 },
  { id: 3, name: 'Material', values: ['Cotton', 'Nylon', 'Leather', 'Rubber', 'Plastic', 'Metal'], usedInProducts: 22 },
  { id: 4, name: 'Flavor', values: ['Chicken', 'Beef', 'Fish', 'Lamb', 'Tuna', 'Salmon'], usedInProducts: 18 },
  { id: 5, name: 'Weight', values: ['1kg', '2kg', '5kg', '10kg', '15kg', '20kg'], usedInProducts: 15 },
  { id: 6, name: 'Age Group', values: ['Puppy/Kitten', 'Adult', 'Senior'], usedInProducts: 12 },
  { id: 7, name: 'Pet Size', values: ['Small Breed', 'Medium Breed', 'Large Breed', 'All Breeds'], usedInProducts: 10 },
];

export default function Attributes() {
  usePhoenixInit();
  const [showAdd, setShowAdd] = useState(false);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/products">Products</a></li>
          <li className="breadcrumb-item active">Attributes</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">🔧 Product Attributes</h2></div>
          <div className="col-auto ms-auto">
            <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)}><span className="fas fa-plus me-2"></span>Add Attribute</button>
          </div>
        </div>
        {showAdd && (
          <div className="card mb-4 border border-translucent">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4"><label className="form-label">Attribute Name</label><input className="form-control" placeholder="e.g., Scent" /></div>
                <div className="col-md-8"><label className="form-label">Values (comma-separated)</label><input className="form-control" placeholder="Lavender, Vanilla, Unscented" /></div>
                <div className="col-12"><button className="btn btn-primary me-2">Save</button><button className="btn btn-phoenix-secondary" onClick={() => setShowAdd(false)}>Cancel</button></div>
              </div>
            </div>
          </div>
        )}
        <div className="row g-3">
          {attributesData.map(attr => (
            <div key={attr.id} className="col-md-6">
              <div className="card border border-translucent">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">{attr.name}</h5>
                    <span className="badge badge-phoenix-info">{attr.usedInProducts} products</span>
                  </div>
                  <div>
                    {attr.values.map(v => (
                      <span key={v} className="badge badge-phoenix badge-phoenix-secondary me-1 mb-1">{v} <span className="fas fa-times ms-1 cursor-pointer"></span></span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top border-translucent">
                  <div className="d-flex gap-2">
                    <input className="form-control form-control-sm" type="text" placeholder="Add value..." style={{maxWidth: 200}} />
                    <button className="btn btn-sm btn-phoenix-primary">Add</button>
                    <button className="btn btn-sm btn-phoenix-danger ms-auto"><span className="fas fa-trash"></span></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
