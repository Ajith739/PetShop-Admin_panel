import { useState, useEffect, useMemo, useCallback } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { productService } from '../../../services/api';

const formatCurrency = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

export default function Products() {
  usePhoenixInit();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [brandFilter, setBrandFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const perPage = 10;

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await productService.getAll();
      setProducts(res.data || []);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const brands = useMemo(() => [...new Set(products.map(p => p.brand).filter(Boolean))], [products]);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || (p.brand||'').toLowerCase().includes(search.toLowerCase());
      const matchTab = activeTab === 'all' ||
        (activeTab === 'in-stock' && p.stock_quantity > 0 && !p.sale_price) ||
        (activeTab === 'out-of-stock' && p.stock_quantity === 0) ||
        (activeTab === 'on-sale' && p.sale_price);
      const matchBrand = !brandFilter || p.brand === brandFilter;
      return matchSearch && matchTab && matchBrand;
    });
  }, [products, search, activeTab, brandFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  const counts = {
    all: products.length,
    'in-stock': products.filter(p => p.stock_quantity > 0 && !p.sale_price).length,
    'out-of-stock': products.filter(p => p.stock_quantity === 0).length,
    'on-sale': products.filter(p => p.sale_price).length,
  };

  const toggleRow = (id) => {
    setSelectedRows(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };
  const toggleAll = () => {
    setSelectedRows(selectedRows.size === pageData.length ? new Set() : new Set(pageData.map(p => p.id)));
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this product?')) return;
    try {
      await productService.delete(id);
      setProducts(prev => prev.filter(p => p.id !== id));
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
          <li className="breadcrumb-item active">Products</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">📦 Products</h2></div>
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
        <div className="d-flex flex-wrap gap-3 mb-4">
          <div className="search-box">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search products"
                value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
              <span className="fas fa-search search-box-icon"></span>
            </form>
          </div>
          <div className="btn-group position-static text-nowrap">
            <button className="btn btn-phoenix-secondary px-7" type="button"
              data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
              {brandFilter || 'Brand'}<span className="fas fa-angle-down ms-2"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setBrandFilter(''); setPage(1); }}>All Brands</a></li>
              {brands.map(br => (
                <li key={br}><a className="dropdown-item" href="#"
                  onClick={(e) => { e.preventDefault(); setBrandFilter(br); setPage(1); }}>{br}</a></li>
              ))}
            </ul>
          </div>
          <div className="ms-xxl-auto">
            <a className="btn btn-primary" href="/products/add">
              <span className="fas fa-plus me-2"></span>Add Product
            </a>
          </div>
        </div>

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
                  <th className="sort align-middle ps-4">PRODUCT NAME</th>
                  <th className="sort align-middle ps-4">SKU</th>
                  <th className="sort align-middle text-end ps-4">PRICE</th>
                  <th className="sort align-middle text-center ps-4">STOCK</th>
                  <th className="sort align-middle ps-4">BRAND</th>
                  <th className="sort align-middle text-center ps-4">STATUS</th>
                  <th className="sort text-end align-middle pe-0 ps-4"></th>
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
                    <td className="product align-middle ps-4">
                      <span className="fw-semibold">{product.name}</span>
                      {product.is_featured && <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10">Featured</span>}
                    </td>
                    <td className="align-middle ps-4 text-body-tertiary font-monospace fs-10">{product.sku}</td>
                    <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
                      {product.sale_price ? (
                        <>
                          <span className="text-decoration-line-through text-body-quaternary me-1">{formatCurrency(product.price)}</span>
                          {formatCurrency(product.sale_price)}
                        </>
                      ) : formatCurrency(product.price)}
                    </td>
                    <td className="align-middle text-center ps-4">
                      <span className={`badge ${product.stock_quantity > 10 ? 'badge-phoenix-success' : product.stock_quantity > 0 ? 'badge-phoenix-warning' : 'badge-phoenix-danger'}`}>
                        {product.stock_quantity > 0 ? product.stock_quantity : 'Out'}
                      </span>
                    </td>
                    <td className="align-middle ps-4 text-body-tertiary">{product.brand || '-'}</td>
                    <td className="align-middle text-center ps-4">
                      <span className={`badge ${product.is_active ? 'badge-phoenix-success' : 'badge-phoenix-secondary'}`}>
                        {product.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                      <div className="btn-reveal-trigger position-static">
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button" data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                          <span className="fas fa-ellipsis-h fs-10"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a className="dropdown-item" href="#!">Edit</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#" onClick={(e) => { e.preventDefault(); handleDelete(product.id); }}>Remove</a>
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
