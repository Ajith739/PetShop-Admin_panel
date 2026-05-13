import { useState, useEffect, useMemo, useCallback } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { petService, categoryService, breedService } from '../../services/api';

const formatCurrency = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

export default function AllPets() {
  usePhoenixInit();
  const [pets, setPets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [healthFilter, setHealthFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const perPage = 10;

  // Fetch data from API
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [petsRes, catsRes, breedsRes] = await Promise.all([
        petService.getAll(),
        categoryService.getAll(),
        breedService.getAll(),
      ]);
      setPets(petsRes.data || []);
      // categories endpoint returns flat array
      setCategories(Array.isArray(catsRes) ? catsRes : (catsRes.data || []));
      setBreeds(breedsRes.data || []);
    } catch (err) {
      setError(err.message || 'Failed to load pets');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const categoryMap = useMemo(() => {
    const map = {};
    categories.forEach(c => { map[c.id] = c; });
    return map;
  }, [categories]);

  const breedMap = useMemo(() => {
    const map = {};
    breeds.forEach(b => { map[b.id] = b; });
    return map;
  }, [breeds]);

  const filtered = useMemo(() => {
    return pets.filter(p => {
      const catName = categoryMap[p.pet_category_id]?.name || '';
      const breedName = breedMap[p.breed_id]?.name || '';
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || breedName.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !categoryFilter || catName === categoryFilter;
      const matchBreed = !breedFilter || breedName === breedFilter;
      const matchGender = !genderFilter || p.gender === genderFilter.toLowerCase();
      const matchHealth = !healthFilter || p.health_status === healthFilter.toLowerCase();
      const matchSize = !sizeFilter || p.size === sizeFilter.toLowerCase();
      return matchSearch && matchCategory && matchBreed && matchGender && matchHealth && matchSize;
    });
  }, [pets, search, categoryFilter, breedFilter, genderFilter, healthFilter, sizeFilter, categoryMap, breedMap]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);
  const availableBreeds = categoryFilter
    ? breeds.filter(b => categoryMap[b.pet_category_id]?.name === categoryFilter)
    : breeds;

  const toggleRow = (id) => {
    setSelectedRows(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };
  const toggleAll = () => {
    setSelectedRows(selectedRows.size === pageData.length ? new Set() : new Set(pageData.map(p => p.id)));
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this pet?')) return;
    try {
      await petService.delete(id);
      setPets(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      alert(err.message || 'Failed to delete pet');
    }
  };

  const handleBulkDelete = async () => {
    if (!confirm(`Delete ${selectedRows.size} selected pets?`)) return;
    try {
      await petService.bulkDelete([...selectedRows]);
      setPets(prev => prev.filter(p => !selectedRows.has(p.id)));
      setSelectedRows(new Set());
    } catch (err) {
      alert(err.message || 'Failed to delete pets');
    }
  };

  const healthBadge = (status) => {
    const map = { excellent: 'badge-phoenix-success', good: 'badge-phoenix-success', fair: 'badge-phoenix-warning', needs_attention: 'badge-phoenix-danger' };
    return map[status] || 'badge-phoenix-secondary';
  };

  const healthLabel = (status) => {
    const map = { excellent: 'Excellent', good: 'Good', fair: 'Fair', needs_attention: 'Needs Attention' };
    return map[status] || status;
  };

  const stockBadge = (qty) => qty > 0 ? 'badge-phoenix-success' : 'badge-phoenix-danger';

  const categoryIcons = { Dogs: '🐕', Cats: '🐱', Fish: '🐠', Birds: '🐦', Reptiles: '🦎', 'Small Animals': '🐹' };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-9">
        <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
      </div>
    );
  }

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pets">Pets</a></li>
          <li className="breadcrumb-item active">All Pets</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">🐾 All Pets</h2></div>
        </div>

        {error && <div className="alert alert-phoenix-danger mb-3">{error}</div>}

        {/* Summary Cards */}
        <div className="row g-3 mb-4">
          {[
            { label: 'Total Pets', value: pets.length, icon: '🐾', color: 'primary' },
            { label: 'Available', value: pets.filter(p => p.stock_quantity > 0).length, icon: '✅', color: 'success' },
            { label: 'Featured', value: pets.filter(p => p.is_featured).length, icon: '⭐', color: 'warning' },
            { label: 'Categories', value: categories.length, icon: '📂', color: 'info' },
          ].map((card, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="card border border-translucent">
                <div className="card-body d-flex align-items-center">
                  <span className="fs-5 me-3">{card.icon}</span>
                  <div>
                    <p className="text-body-tertiary mb-0 fs-9">{card.label}</p>
                    <h4 className="mb-0 text-body-emphasis">{card.value}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-3">
            <div className="search-box">
              <form className="position-relative">
                <input className="form-control search-input search" type="search" placeholder="Search pets..."
                  value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                <span className="fas fa-search search-box-icon"></span>
              </form>
            </div>
            <div className="scrollbar overflow-hidden-y">
              <div className="btn-group position-static" role="group">
                {/* Category */}
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {categoryFilter || 'Category'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setCategoryFilter(''); setBreedFilter(''); setPage(1); }}>All Categories</a></li>
                    {categories.map(cat => (
                      <li key={cat.id}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setCategoryFilter(cat.name); setBreedFilter(''); setPage(1); }}>{categoryIcons[cat.name] || '📂'} {cat.name}</a></li>
                    ))}
                  </ul>
                </div>
                {/* Breed */}
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {breedFilter || 'Breed'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu" style={{maxHeight: 200, overflowY: 'auto'}}>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setBreedFilter(''); setPage(1); }}>All Breeds</a></li>
                    {availableBreeds.map(b => (
                      <li key={b.id}><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setBreedFilter(b.name); setPage(1); }}>{b.name}</a></li>
                    ))}
                  </ul>
                </div>
                {/* Gender */}
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {genderFilter || 'Gender'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setGenderFilter(''); setPage(1); }}>All</a></li>
                    {['Male','Female','Unknown'].map(g => (
                      <li key={g}><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setGenderFilter(g); setPage(1); }}>{g}</a></li>
                    ))}
                  </ul>
                </div>
                {/* Size */}
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {sizeFilter || 'Size'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setSizeFilter(''); setPage(1); }}>All</a></li>
                    {['Small','Medium','Large'].map(s => (
                      <li key={s}><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setSizeFilter(s); setPage(1); }}>{s}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="ms-xxl-auto">
              <button className="btn btn-link text-body me-4 px-0">
                <span className="fa-solid fa-file-export fs-9 me-2"></span>Export
              </button>
              <a className="btn btn-primary" href="/pets/add">
                <span className="fas fa-plus me-2"></span>Add Pet
              </a>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedRows.size > 0 && (
          <div className="alert alert-phoenix-info d-flex align-items-center mb-3">
            <span className="me-3">{selectedRows.size} selected</span>
            <button className="btn btn-sm btn-phoenix-danger me-2" onClick={handleBulkDelete}><span className="fas fa-trash me-1"></span>Delete</button>
          </div>
        )}

        {/* Table */}
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 align-middle ps-0" style={{width: 18}}>
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox"
                        checked={selectedRows.size === pageData.length && pageData.length > 0} onChange={toggleAll} />
                    </div>
                  </th>
                  <th className="sort align-middle ps-4" style={{width: 200}}>PET NAME</th>
                  <th className="sort align-middle ps-4" style={{width: 100}}>CATEGORY</th>
                  <th className="sort align-middle ps-4" style={{width: 150}}>BREED</th>
                  <th className="sort align-middle ps-4" style={{width: 80}}>AGE</th>
                  <th className="sort align-middle ps-4" style={{width: 80}}>GENDER</th>
                  <th className="sort align-middle text-end ps-4" style={{width: 100}}>PRICE</th>
                  <th className="sort align-middle text-center ps-4" style={{width: 80}}>STOCK</th>
                  <th className="sort align-middle ps-4" style={{width: 100}}>HEALTH</th>
                  <th className="sort text-end align-middle pe-0 ps-4"></th>
                </tr>
              </thead>
              <tbody className="list">
                {pageData.map(pet => {
                  const catName = categoryMap[pet.pet_category_id]?.name || 'Unknown';
                  const breedName = breedMap[pet.breed_id]?.name || 'Unknown';
                  const ageLabel = pet.age_months >= 12 ? `${Math.floor(pet.age_months/12)} yr${pet.age_months >= 24 ? 's' : ''}` : `${pet.age_months} mo`;
                  return (
                    <tr key={pet.id} className="position-static">
                      <td className="fs-9 align-middle">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" checked={selectedRows.has(pet.id)} onChange={() => toggleRow(pet.id)} />
                        </div>
                      </td>
                      <td className="align-middle ps-4">
                        <a className="fw-semibold mb-0" href={`/pets/edit/${pet.id}`}>
                          {pet.name}
                          {pet.is_featured && <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10">Featured</span>}
                        </a>
                      </td>
                      <td className="align-middle ps-4 text-body-quaternary fw-semibold fs-9">
                        {categoryIcons[catName] || ''} {catName}
                      </td>
                      <td className="align-middle ps-4 text-body-tertiary fs-9">{breedName}</td>
                      <td className="align-middle ps-4 text-body-tertiary fs-9">{ageLabel}</td>
                      <td className="align-middle ps-4 text-body-tertiary fs-9 text-capitalize">{pet.gender}</td>
                      <td className="align-middle text-end ps-4 fw-bold text-body-tertiary">
                        {pet.sale_price ? (
                          <>
                            <span className="text-decoration-line-through text-body-quaternary me-1">{formatCurrency(pet.price)}</span>
                            {formatCurrency(pet.sale_price)}
                          </>
                        ) : formatCurrency(pet.price)}
                      </td>
                      <td className="align-middle text-center ps-4">
                        <span className={`badge ${stockBadge(pet.stock_quantity)}`}>
                          {pet.stock_quantity > 0 ? pet.stock_quantity : 'Sold Out'}
                        </span>
                      </td>
                      <td className="align-middle ps-4">
                        <span className={`badge ${healthBadge(pet.health_status)}`}>
                          {healthLabel(pet.health_status)}
                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button" data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                            <span className="fas fa-ellipsis-h fs-10"></span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a className="dropdown-item" href={`/pets/edit/${pet.id}`}>Edit</a>
                            <a className="dropdown-item" href="/pets/health-records">Health Records</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#" onClick={(e) => { e.preventDefault(); handleDelete(pet.id); }}>Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body">
                {filtered.length > 0 ? `${(page-1)*perPage + 1} to ${Math.min(page*perPage, filtered.length)} of ${filtered.length}` : 'No results'}
              </p>
            </div>
            <div className="col-auto d-flex">
              <button className="page-link" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>
                <span className="fas fa-chevron-left"></span>
              </button>
              <ul className="mb-0 pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
                  </li>
                ))}
              </ul>
              <button className="page-link pe-0" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
