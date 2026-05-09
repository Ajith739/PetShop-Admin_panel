import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { petCategories, petBreeds } from '../../data/petsData';

export default function AddEditPet() {
  usePhoenixInit();
  const [activeTab, setActiveTab] = useState('basic');
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const tabs = [
    { key: 'basic', label: 'Basic Info', icon: 'fas fa-paw' },
    { key: 'details', label: 'Details', icon: 'fas fa-info-circle' },
    { key: 'pricing', label: 'Pricing & Inventory', icon: 'fas fa-tag' },
    { key: 'health', label: 'Health & Pedigree', icon: 'fas fa-heartbeat' },
    { key: 'media', label: 'Media', icon: 'fas fa-image' },
    { key: 'seo', label: 'SEO & Status', icon: 'fas fa-search' },
  ];

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pets">Pets</a></li>
          <li className="breadcrumb-item active">Add New Pet</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">🐾 Add New Pet</h2></div>
        </div>

        {/* Tab Navigation */}
        <ul className="nav nav-underline mb-4">
          {tabs.map(tab => (
            <li key={tab.key} className="nav-item">
              <a className={`nav-link ${activeTab === tab.key ? 'active' : ''}`} href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab(tab.key); }}>
                <span className={`${tab.icon} me-2`}></span>{tab.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="row g-5">
          <div className="col-12 col-xl-8">
            {/* Basic Info Tab */}
            {activeTab === 'basic' && (
              <div className="card mb-3">
                <div className="card-header"><h5 className="mb-0">Basic Information</h5></div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Pet Name *</label>
                      <input className="form-control" type="text" placeholder="Enter pet name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Category *</label>
                      <select className="form-select">
                        <option value="">Select category</option>
                        {petCategories.map(c => <option key={c.id} value={c.name}>{c.icon} {c.name}</option>)}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Breed *</label>
                      <select className="form-select">
                        <option value="">Select breed</option>
                        {Object.values(petBreeds).flat().map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Species</label>
                      <input className="form-control" type="text" placeholder="e.g., Canis lupus familiaris" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Short Description</label>
                      <textarea className="form-control" rows="2" placeholder="Brief description of the pet"></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Full Description</label>
                      <textarea className="form-control" rows="5" placeholder="Detailed description"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Details Tab */}
            {activeTab === 'details' && (
              <div className="card mb-3">
                <div className="card-header"><h5 className="mb-0">Pet Details</h5></div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label">Age</label>
                      <input className="form-control" type="text" placeholder="e.g., 2 years" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Date of Birth</label>
                      <input className="form-control" type="date" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Gender</label>
                      <select className="form-select">
                        <option>Male</option><option>Female</option><option>Unknown</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Color / Markings</label>
                      <input className="form-control" type="text" placeholder="e.g., Golden, Black & Tan" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Size</label>
                      <select className="form-select">
                        <option>Small</option><option>Medium</option><option>Large</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Weight</label>
                      <input className="form-control" type="text" placeholder="e.g., 30kg" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Height / Length</label>
                      <input className="form-control" type="text" placeholder="e.g., 56cm" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Care Level</label>
                      <select className="form-select">
                        <option>Easy</option><option>Moderate</option><option>High</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Special Care Instructions</label>
                      <textarea className="form-control" rows="3" placeholder="Any special care requirements"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Tab */}
            {activeTab === 'pricing' && (
              <div className="card mb-3">
                <div className="card-header"><h5 className="mb-0">Pricing & Inventory</h5></div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6"><label className="form-label">Price (₹) *</label><input className="form-control" type="number" placeholder="0" /></div>
                    <div className="col-md-6"><label className="form-label">Cost Price (₹)</label><input className="form-control" type="number" placeholder="0" /></div>
                    <div className="col-md-6"><label className="form-label">Discount (%)</label><input className="form-control" type="number" placeholder="0" min="0" max="100" /></div>
                    <div className="col-md-6"><label className="form-label">Sale Price (₹)</label><input className="form-control" type="number" placeholder="Auto-calculated" disabled /></div>
                    <hr className="my-3" />
                    <div className="col-md-4"><label className="form-label">SKU *</label><input className="form-control" type="text" placeholder="PET-DOG-001" /></div>
                    <div className="col-md-4"><label className="form-label">Stock Quantity *</label><input className="form-control" type="number" placeholder="0" /></div>
                    <div className="col-md-4"><label className="form-label">Min Stock Alert</label><input className="form-control" type="number" placeholder="1" /></div>
                  </div>
                </div>
              </div>
            )}

            {/* Health Tab */}
            {activeTab === 'health' && (
              <div className="card mb-3">
                <div className="card-header"><h5 className="mb-0">Health & Pedigree</h5></div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Health Status</label>
                      <select className="form-select"><option>Healthy</option><option>Under Treatment</option><option>Recovering</option></select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Vaccination Status</label>
                      <select className="form-select"><option>Complete</option><option>Partial</option><option>N/A</option></select>
                    </div>
                    <div className="col-md-6"><label className="form-label">Last Vaccination Date</label><input className="form-control" type="date" /></div>
                    <div className="col-md-6">
                      <label className="form-label">Vet Certificate</label>
                      <input className="form-control" type="file" accept=".pdf,.jpg,.png" />
                    </div>
                    <hr className="my-3" />
                    <div className="col-md-6">
                      <label className="form-label">Pedigree Certificate</label>
                      <select className="form-select"><option>Yes</option><option>No</option></select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Upload Pedigree Certificate</label>
                      <input className="form-control" type="file" accept=".pdf,.jpg,.png" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Media Tab */}
            {activeTab === 'media' && (
              <div className="card mb-3">
                <div className="card-header"><h5 className="mb-0">Media</h5></div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Featured Image *</label>
                      <input className="form-control" type="file" accept="image/*" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Additional Images</label>
                      <input className="form-control" type="file" accept="image/*" multiple />
                      <div className="form-text">Upload up to 5 additional images</div>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Video URL</label>
                      <input className="form-control" type="url" placeholder="https://youtube.com/watch?v=..." />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SEO Tab */}
            {activeTab === 'seo' && (
              <div className="card mb-3">
                <div className="card-header"><h5 className="mb-0">SEO & Status</h5></div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12"><label className="form-label">Meta Title</label><input className="form-control" type="text" placeholder="SEO title" /></div>
                    <div className="col-12"><label className="form-label">Meta Description</label><textarea className="form-control" rows="2" placeholder="SEO description (max 160 chars)"></textarea></div>
                    <div className="col-12"><label className="form-label">Keywords</label><input className="form-control" type="text" placeholder="Comma-separated keywords" /></div>
                    <hr className="my-3" />
                    <div className="col-md-6">
                      <label className="form-label">Status</label>
                      <select className="form-select"><option>Active</option><option>Inactive</option></select>
                    </div>
                    <div className="col-md-6">
                      <div className="mt-4">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="featured-check" />
                          <label className="form-check-label" htmlFor="featured-check">Mark as Featured</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Preview */}
          <div className="col-12 col-xl-4">
            <div className="card position-sticky top-0">
              <div className="card-header"><h5 className="mb-0">Publish</h5></div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-body-tertiary">Status:</span>
                  <span className="badge badge-phoenix-success">Draft</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-body-tertiary">Visibility:</span>
                  <span>Public</span>
                </div>
                <hr />
                <button className="btn btn-primary w-100 mb-2">
                  <span className="fas fa-save me-2"></span>Save Pet
                </button>
                <button className="btn btn-phoenix-secondary w-100">
                  <span className="fas fa-eye me-2"></span>Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
