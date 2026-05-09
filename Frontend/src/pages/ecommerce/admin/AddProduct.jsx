import { useState, useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { petCategories, petBrands, petTypes } from './petShopData';

export default function AddProduct() {
  usePhoenixInit();

  const [activeTab, setActiveTab] = useState('pricing');
  const [formData, setFormData] = useState({
    title: '', description: '', regularPrice: '', salePrice: '',
    restockQty: '', sku: '',
    shippingType: 'petshop',
    deliveryType: 'selected',
    fragile: false, perishable: false, liveAnimal: false, tempSensitive: false, hasExpiry: false,
    expiryDate: '',
    idType: 'SKU', productId: '',
    category: 'Pet Food', brand: 'Royal Canin', petType: 'Dog',
    collection: '', tags: '',
  });
  const [variants, setVariants] = useState([
    { optionType: 'Size', values: ['Small', 'Medium', 'Large'] },
  ]);

  useEffect(() => { if (window.feather) window.feather.replace(); });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const addVariant = () => {
    setVariants(prev => [...prev, { optionType: 'Size', values: [] }]);
  };

  const removeVariant = (idx) => {
    setVariants(prev => prev.filter((_, i) => i !== idx));
  };

  const tabs = [
    { key: 'pricing', label: 'Pricing', icon: 'tag' },
    { key: 'restock', label: 'Restock', icon: 'package' },
    { key: 'shipping', label: 'Shipping', icon: 'truck' },
    { key: 'delivery', label: 'Delivery', icon: 'globe' },
    { key: 'attributes', label: 'Attributes', icon: 'sliders' },
    { key: 'advanced', label: 'Advanced', icon: 'lock' },
  ];

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pet-shop/products">Products</a></li>
          <li className="breadcrumb-item active">Add product</li>
        </ol>
      </nav>

      <form className="mb-9" onSubmit={(e) => e.preventDefault()}>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Add a product</h2>
            <h5 className="text-body-tertiary fw-semibold">Add new pet products to your store inventory</h5>
          </div>
          <div className="col-auto">
            <button className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0" type="button">Discard</button>
            <button className="btn btn-phoenix-primary me-2 mb-2 mb-sm-0" type="button">Save draft</button>
            <button className="btn btn-primary mb-2 mb-sm-0" type="submit">Publish product</button>
          </div>
        </div>

        <div className="row g-5">
          {/* Left Column */}
          <div className="col-12 col-xl-8">
            <h4 className="mb-3">Product Title</h4>
            <input className="form-control mb-5" type="text" name="title" value={formData.title}
              onChange={handleChange} placeholder="e.g. Royal Canin Medium Adult Dry Dog Food" />

            <div className="mb-6">
              <h4 className="mb-3">Product Description</h4>
              <textarea className="form-control" rows="6" name="description" value={formData.description}
                onChange={handleChange}
                placeholder="Describe the product features, ingredients, suitability for pet types, sizes available..." />
            </div>

            <h4 className="mb-3">Display images</h4>
            <div className="border border-dashed border-translucent rounded-3 p-5 mb-5 text-center bg-body-emphasis">
              <div className="text-body-tertiary text-opacity-85">
                Drag your photos here <span className="text-body-secondary px-1">or</span>
                <button className="btn btn-link p-0" type="button">Browse from device</button>
                <br />
                <span className="fas fa-image mt-3 fs-5 text-body-quaternary"></span>
              </div>
            </div>

            <h4 className="mb-3">Inventory</h4>
            <div className="row g-0 border-top border-bottom">
              {/* Tab Navigation */}
              <div className="col-sm-4">
                <div className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm fs-9 h-100 justify-content-between"
                  role="tablist" aria-orientation="vertical">
                  {tabs.map(tab => (
                    <a key={tab.key}
                      className={`nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center ${activeTab === tab.key ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.key)} role="tab">
                      <span className="me-sm-2 fs-4 nav-icons" data-feather={tab.icon}></span>
                      <span className="d-none d-sm-inline">{tab.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="col-sm-8">
                <div className="py-3 ps-sm-4 h-100">
                  {/* Pricing Tab */}
                  {activeTab === 'pricing' && (
                    <div>
                      <h4 className="mb-3 d-sm-none">Pricing</h4>
                      <div className="row g-3">
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">Regular price</h5>
                          <input className="form-control" type="text" name="regularPrice"
                            value={formData.regularPrice} onChange={handleChange} placeholder="₹ 0.00" />
                        </div>
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">Sale price</h5>
                          <input className="form-control" type="text" name="salePrice"
                            value={formData.salePrice} onChange={handleChange} placeholder="₹ 0.00" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Restock Tab */}
                  {activeTab === 'restock' && (
                    <div className="d-flex flex-column h-100">
                      <h5 className="mb-3 text-body-highlight">Add to Stock</h5>
                      <div className="row g-3 flex-1 mb-4">
                        <div className="col-sm-7">
                          <input className="form-control" type="number" name="restockQty"
                            value={formData.restockQty} onChange={handleChange} placeholder="Quantity" />
                        </div>
                        <div className="col-sm">
                          <button className="btn btn-primary" type="button">
                            <span className="fa-solid fa-check me-1 fs-10"></span>Confirm
                          </button>
                        </div>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td className="text-body-highlight fw-bold py-1" style={{width: 200}}>Product in stock now:</td>
                            <td className="text-body-tertiary fw-semibold py-1">142 units</td>
                          </tr>
                          <tr>
                            <td className="text-body-highlight fw-bold py-1">Product in transit:</td>
                            <td className="text-body-tertiary fw-semibold py-1">50 units</td>
                          </tr>
                          <tr>
                            <td className="text-body-highlight fw-bold py-1">Last time restocked:</td>
                            <td className="text-body-tertiary fw-semibold py-1">April 15, 2025</td>
                          </tr>
                          <tr>
                            <td className="text-body-highlight fw-bold py-1">Total stock over lifetime:</td>
                            <td className="text-body-tertiary fw-semibold py-1">2,450 units</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Shipping Tab */}
                  {activeTab === 'shipping' && (
                    <div className="d-flex flex-column h-100">
                      <h5 className="mb-3 text-body-highlight">Shipping Type</h5>
                      <div className="flex-1">
                        <div className="mb-4">
                          <div className="form-check mb-1">
                            <input className="form-check-input" type="radio" name="shippingType"
                              id="selfShipping" value="self" checked={formData.shippingType === 'self'}
                              onChange={handleChange} />
                            <label className="form-check-label fs-8 text-body" htmlFor="selfShipping">Fulfilled by Seller</label>
                          </div>
                          <div className="ps-4">
                            <p className="text-body-secondary fs-9 mb-0">You'll be responsible for product delivery.<br />
                            Special care needed for perishable items and live animal products.</p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="form-check mb-1">
                            <input className="form-check-input" type="radio" name="shippingType"
                              id="petshopShipping" value="petshop" checked={formData.shippingType === 'petshop'}
                              onChange={handleChange} />
                            <label className="form-check-label fs-8 text-body d-flex align-items-center" htmlFor="petshopShipping">
                              Fulfilled by Pet Shop <span className="badge badge-phoenix badge-phoenix-warning fs-10 ms-2">Recommended</span>
                            </label>
                          </div>
                          <div className="ps-4">
                            <p className="text-body-secondary fs-9 mb-0">Your product, our responsibility.<br />
                            Temperature-controlled shipping for sensitive items. Live animal shipping available.</p>
                          </div>
                        </div>
                      </div>
                      <p className="fs-9 fw-semibold mb-0">See our <a className="fw-bold" href="#!">Pet delivery terms and conditions</a> for details.</p>
                    </div>
                  )}

                  {/* Global Delivery Tab */}
                  {activeTab === 'delivery' && (
                    <div>
                      <h5 className="mb-3 text-body-highlight">Delivery Options</h5>
                      <div className="mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="deliveryType"
                            id="nationwide" value="nationwide" checked={formData.deliveryType === 'nationwide'}
                            onChange={handleChange} />
                          <label className="form-check-label fs-8 text-body" htmlFor="nationwide">Nationwide delivery</label>
                        </div>
                        <div className="ps-4">
                          <p className="fs-9 mb-0 text-body-secondary">Available across all major cities in India</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="deliveryType"
                            id="selectedCities" value="selected" checked={formData.deliveryType === 'selected'}
                            onChange={handleChange} />
                          <label className="form-check-label fs-8 text-body" htmlFor="selectedCities">Selected Cities</label>
                        </div>
                        <div className="ps-4" style={{maxWidth: 350}}>
                          <select className="form-select" multiple>
                            <option>Chennai</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            <option>Bangalore</option>
                            <option>Hyderabad</option>
                            <option>Pune</option>
                            <option>Kolkata</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="deliveryType"
                            id="localOnly" value="local" checked={formData.deliveryType === 'local'}
                            onChange={handleChange} />
                          <label className="form-check-label fs-8 text-body" htmlFor="localOnly">Local delivery only</label>
                        </div>
                        <p className="fs-9 ms-4 mb-0 text-body-secondary">Deliver within your city only</p>
                      </div>
                    </div>
                  )}

                  {/* Attributes Tab */}
                  {activeTab === 'attributes' && (
                    <div>
                      <h5 className="mb-3 text-body-highlight">Product Attributes</h5>
                      <div className="form-check mb-2">
                        <input className="form-check-input" id="fragileCheck" type="checkbox"
                          name="fragile" checked={formData.fragile} onChange={handleChange} />
                        <label className="form-check-label text-body fs-8" htmlFor="fragileCheck">Fragile Product</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" id="perishableCheck" type="checkbox"
                          name="perishable" checked={formData.perishable} onChange={handleChange} />
                        <label className="form-check-label text-body fs-8" htmlFor="perishableCheck">Perishable Item</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" id="liveAnimalCheck" type="checkbox"
                          name="liveAnimal" checked={formData.liveAnimal} onChange={handleChange} />
                        <label className="form-check-label text-body fs-8" htmlFor="liveAnimalCheck">Live Animal Product</label>
                      </div>
                      <div className="mb-3">
                        <div className="form-check mb-2">
                          <input className="form-check-input" id="tempCheck" type="checkbox"
                            name="tempSensitive" checked={formData.tempSensitive} onChange={handleChange} />
                          <label className="form-check-label text-body fs-8" htmlFor="tempCheck">Temperature Sensitive</label>
                        </div>
                        {formData.tempSensitive && (
                          <input className="form-control ms-4" type="text" placeholder="Max. allowed Temperature (°C)"
                            style={{maxWidth: 350}} />
                        )}
                      </div>
                      <div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" id="expiryCheck" type="checkbox"
                            name="hasExpiry" checked={formData.hasExpiry} onChange={handleChange} />
                          <label className="form-check-label text-body fs-8" htmlFor="expiryCheck">Has Expiry Date</label>
                        </div>
                        {formData.hasExpiry && (
                          <input className="form-control ms-4" type="date" name="expiryDate"
                            value={formData.expiryDate} onChange={handleChange} style={{maxWidth: 350}} />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Advanced Tab */}
                  {activeTab === 'advanced' && (
                    <div>
                      <h5 className="mb-3 text-body-highlight">Advanced</h5>
                      <div className="row g-3">
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">Product ID Type</h5>
                          <select className="form-select" name="idType" value={formData.idType} onChange={handleChange}>
                            <option value="SKU">SKU</option>
                            <option value="UPC">UPC</option>
                            <option value="EAN">EAN</option>
                            <option value="CUSTOM">Custom</option>
                          </select>
                        </div>
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">Product ID</h5>
                          <input className="form-control" type="text" name="productId"
                            value={formData.productId} onChange={handleChange} placeholder="e.g. RC-MDA-15K" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-xl-4">
            <div className="row g-2">
              {/* Organize Card */}
              <div className="col-12 col-xl-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Organize</h4>
                    <div className="row gx-3">
                      <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                          <div className="d-flex flex-wrap flex-between-center mb-2">
                            <h5 className="mb-0 text-body-highlight me-2">Category</h5>
                            <a className="fw-bold fs-9" href="#!">Add new category</a>
                          </div>
                          <select className="form-select mb-3" name="category" value={formData.category} onChange={handleChange}>
                            {petCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                          <div className="d-flex flex-wrap flex-between-center mb-2">
                            <h5 className="mb-0 text-body-highlight me-2">Brand</h5>
                            <a className="fw-bold fs-9" href="#!">Add new brand</a>
                          </div>
                          <select className="form-select mb-3" name="brand" value={formData.brand} onChange={handleChange}>
                            {petBrands.map(br => <option key={br} value={br}>{br}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                          <div className="d-flex flex-wrap flex-between-center mb-2">
                            <h5 className="mb-0 text-body-highlight me-2">Pet Type</h5>
                          </div>
                          <select className="form-select mb-3" name="petType" value={formData.petType} onChange={handleChange}>
                            {petTypes.map(pt => <option key={pt} value={pt}>{pt}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                          <div className="d-flex flex-wrap mb-2 flex-between-center">
                            <h5 className="mb-2 text-body-highlight">Collection</h5>
                            <a className="fw-bold fs-9" href="#!">Add new collection</a>
                          </div>
                          <input className="form-control mb-xl-3" type="text" name="collection"
                            value={formData.collection} onChange={handleChange} placeholder="e.g. Summer Essentials" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-xl-12">
                        <div className="d-flex flex-wrap flex-between-center mb-2">
                          <h5 className="mb-0 text-body-highlight me-2">Tags</h5>
                          <a className="fw-bold fs-9 lh-sm" href="#!">View all tags</a>
                        </div>
                        <select className="form-select" name="tags" value={formData.tags} onChange={handleChange}>
                          <option value="">Select tags...</option>
                          <option value="puppy">Puppy</option>
                          <option value="adult">Adult</option>
                          <option value="senior">Senior</option>
                          <option value="organic">Organic</option>
                          <option value="grain-free">Grain Free</option>
                          <option value="premium">Premium</option>
                          <option value="bestseller">Bestseller</option>
                          <option value="new-arrival">New Arrival</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Variants Card */}
              <div className="col-12 col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Variants</h4>
                    <div className="row g-3">
                      {variants.map((variant, idx) => (
                        <div key={idx} className="col-12 col-sm-6 col-xl-12">
                          <div className={idx < variants.length - 1 ? 'border-bottom border-translucent border-dashed pb-4' : ''}>
                            <div className="d-flex flex-wrap flex-between-center mb-2">
                              <h5 className="text-body-highlight me-2">Option {idx + 1}</h5>
                              <a className="fw-bold fs-9" href="#!" onClick={(e) => { e.preventDefault(); removeVariant(idx); }}>Remove</a>
                            </div>
                            <select className="form-select mb-3" value={variant.optionType}
                              onChange={(e) => {
                                const updated = [...variants];
                                updated[idx].optionType = e.target.value;
                                setVariants(updated);
                              }}>
                              <option value="Size">Size</option>
                              <option value="Weight">Weight</option>
                              <option value="Flavor">Flavor</option>
                              <option value="Color">Color</option>
                              <option value="Age Group">Age Group</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="btn btn-phoenix-primary w-100 mt-3" type="button" onClick={addVariant}>
                      Add another option
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
