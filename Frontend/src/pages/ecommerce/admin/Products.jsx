import { useState, useEffect, useMemo } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { productsData, petCategories, petBrands, formatCurrency } from './petShopData';

export default function Products() {
  usePhoenixInit();

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [starredMap, setStarredMap] = useState(() => {
    const m = {};
    productsData.forEach(p => { m[p.id] = p.starred; });
    return m;
  });
  const perPage = 10;

  useEffect(() => { if (window.feather) window.feather.replace(); });

  // Filtering
  const filtered = useMemo(() => {
    return productsData.filter(p => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      const matchTab = activeTab === 'all' ||
        (activeTab === 'in-stock' && p.stock > 0 && p.status !== 'on-sale') ||
        (activeTab === 'out-of-stock' && p.stock === 0) ||
        (activeTab === 'on-sale' && p.salePrice);
      const matchCategory = !categoryFilter || p.category === categoryFilter;
      const matchBrand = !brandFilter || p.brand === brandFilter;
      return matchSearch && matchTab && matchCategory && matchBrand;
    });
  }, [search, activeTab, categoryFilter, brandFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  // Tab counts
  const counts = {
    all: productsData.length,
    'in-stock': productsData.filter(p => p.stock > 0 && !p.salePrice).length,
    'out-of-stock': productsData.filter(p => p.stock === 0).length,
    'on-sale': productsData.filter(p => p.salePrice).length,
  };

  const toggleStar = (id) => setStarredMap(prev => ({ ...prev, [id]: !prev[id] }));

  const toggleRow = (id) => {
    setSelectedRows(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === pageData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(pageData.map(p => p.id)));
    }
  };

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pet-shop/products">Products</a></li>
          <li className="breadcrumb-item active">Product list</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Products</h2>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
          {[
            { key: 'all', label: 'All' },
            { key: 'in-stock', label: 'In Stock' },
            { key: 'out-of-stock', label: 'Out of Stock' },
            { key: 'on-sale', label: 'On Sale' },
          ].map(tab => (
            <li key={tab.key} className="nav-item">
              <a className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
                href="#" onClick={(e) => { e.preventDefault(); setActiveTab(tab.key); setPage(1); }}>
                <span>{tab.label} </span>
                <span className="text-body-tertiary fw-semibold">({counts[tab.key]})</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Search & Filters */}
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-3">
            <div className="search-box">
              <form className="position-relative">
                <input className="form-control search-input search" type="search" placeholder="Search products"
                  aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                <span className="fas fa-search search-box-icon"></span>
              </form>
            </div>
            <div className="scrollbar overflow-hidden-y">
              <div className="btn-group position-static" role="group">
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                    {categoryFilter || 'Category'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setCategoryFilter(''); setPage(1); }}>All Categories</a></li>
                    {petCategories.map(cat => (
                      <li key={cat}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setCategoryFilter(cat); setPage(1); }}>{cat}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                    {brandFilter || 'Brand'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setBrandFilter(''); setPage(1); }}>All Brands</a></li>
                    {petBrands.map(br => (
                      <li key={br}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setBrandFilter(br); setPage(1); }}>{br}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="ms-xxl-auto">
              <button className="btn btn-link text-body me-4 px-0">
                <span className="fa-solid fa-file-export fs-9 me-2"></span>Export
              </button>
              <a className="btn btn-primary" href="/pet-shop/add-product">
                <span className="fas fa-plus me-2"></span>Add product
              </a>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 align-middle ps-0" style={{maxWidth: 20, width: 18}}>
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox"
                        checked={selectedRows.size === pageData.length && pageData.length > 0}
                        onChange={toggleAll} />
                    </div>
                  </th>
                  <th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{width: 70}}></th>
                  <th className="sort white-space-nowrap align-middle ps-4" scope="col" style={{width: 350}}>PRODUCT NAME</th>
                  <th className="sort align-middle text-end ps-4" scope="col" style={{width: 150}}>PRICE</th>
                  <th className="sort align-middle ps-4" scope="col" style={{width: 150}}>CATEGORY</th>
                  <th className="sort align-middle ps-3" scope="col" style={{width: 250}}>TAGS</th>
                  <th className="sort align-middle fs-8 text-center ps-4" scope="col" style={{width: 50}}></th>
                  <th className="sort align-middle ps-4" scope="col" style={{width: 200}}>BRAND</th>
                  <th className="sort align-middle ps-4" scope="col" style={{width: 150}}>PUBLISHED ON</th>
                  <th className="sort text-end align-middle pe-0 ps-4" scope="col"></th>
                </tr>
              </thead>
              <tbody className="list">
                {pageData.map(product => (
                  <tr key={product.id} className="position-static">
                    <td className="fs-9 align-middle">
                      <div className="form-check mb-0 fs-8">
                        <input className="form-check-input" type="checkbox"
                          checked={selectedRows.has(product.id)} onChange={() => toggleRow(product.id)} />
                      </div>
                    </td>
                    <td className="align-middle white-space-nowrap py-0">
                      <span className="d-block border border-translucent rounded-2 text-center" style={{width: 53, height: 53, lineHeight: '53px', fontSize: '1.5rem'}}>
                        {product.image}
                      </span>
                    </td>
                    <td className="product align-middle ps-4">
                      <a className="fw-semibold line-clamp-3 mb-0" href="#!">{product.name}</a>
                    </td>
                    <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
                      {product.salePrice ? (
                        <>
                          <span className="text-decoration-line-through text-body-quaternary me-1">{formatCurrency(product.price)}</span>
                          {formatCurrency(product.salePrice)}
                        </>
                      ) : formatCurrency(product.price)}
                    </td>
                    <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
                      {product.category}
                    </td>
                    <td className="tags align-middle review pb-2 ps-3" style={{minWidth: 225}}>
                      {product.tags.map(tag => (
                        <a key={tag} className="text-decoration-none" href="#!">
                          <span className="badge badge-tag me-2 mb-2">{tag}</span>
                        </a>
                      ))}
                    </td>
                    <td className="align-middle review fs-8 text-center ps-4">
                      <span className={`fas fa-star ${starredMap[product.id] ? 'text-warning' : 'text-body-quaternary'}`}
                        style={{ cursor: 'pointer' }} onClick={() => toggleStar(product.id)}></span>
                    </td>
                    <td className="vendor align-middle text-start fw-semibold ps-4">
                      <a href="#!">{product.brand}</a>
                    </td>
                    <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
                      {product.publishedOn}
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true"
                          aria-expanded="false" data-bs-reference="parent">
                          <span className="fas fa-ellipsis-h fs-10"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a className="dropdown-item" href="#!">View</a>
                          <a className="dropdown-item" href="#!">Export</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
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
