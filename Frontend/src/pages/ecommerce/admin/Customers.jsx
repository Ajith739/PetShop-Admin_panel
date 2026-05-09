import { useState, useEffect, useMemo } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { customersData, formatCurrency } from './petShopData';

export default function Customers() {
  usePhoenixInit();

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [cityFilter, setCityFilter] = useState('');
  const [petTypeFilter, setPetTypeFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const perPage = 10;

  useEffect(() => { if (window.feather) window.feather.replace(); });

  const cities = [...new Set(customersData.map(c => c.city))];
  const petOwnerTypes = [...new Set(customersData.map(c => c.petOwnerType))];

  const filtered = useMemo(() => {
    return customersData.filter(c => {
      const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
      const matchTab = activeTab === 'all' ||
        (activeTab === 'new' && c.totalOrders < 40) ||
        (activeTab === 'repeat' && c.totalOrders >= 40) ||
        (activeTab === 'dog' && c.petOwnerType === 'Dog Owner') ||
        (activeTab === 'cat' && c.petOwnerType === 'Cat Owner') ||
        (activeTab === 'loyalty' && (c.loyaltyTier === 'Gold' || c.loyaltyTier === 'Silver'));
      const matchCity = !cityFilter || c.city === cityFilter;
      const matchPetType = !petTypeFilter || c.petOwnerType === petTypeFilter;
      return matchSearch && matchTab && matchCity && matchPetType;
    });
  }, [search, activeTab, cityFilter, petTypeFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  const counts = {
    all: customersData.length,
    new: customersData.filter(c => c.totalOrders < 40).length,
    repeat: customersData.filter(c => c.totalOrders >= 40).length,
    dog: customersData.filter(c => c.petOwnerType === 'Dog Owner').length,
    cat: customersData.filter(c => c.petOwnerType === 'Cat Owner').length,
    loyalty: customersData.filter(c => c.loyaltyTier === 'Gold' || c.loyaltyTier === 'Silver').length,
  };

  const toggleRow = (id) => {
    setSelectedRows(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === pageData.length) setSelectedRows(new Set());
    else setSelectedRows(new Set(pageData.map(c => c.id)));
  };

  const getInitial = (name) => name.charAt(0).toUpperCase();

  const loyaltyBadgeClass = (tier) => {
    if (tier === 'Gold') return 'badge-phoenix-warning';
    if (tier === 'Silver') return 'badge-phoenix-secondary';
    return 'badge-phoenix-info';
  };

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pet-shop/customers">Customers</a></li>
          <li className="breadcrumb-item active">Customer list</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-2 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Customers</h2>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
          {[
            { key: 'all', label: 'All' },
            { key: 'new', label: 'New' },
            { key: 'repeat', label: 'Repeat Buyers' },
            { key: 'dog', label: 'Dog Owners' },
            { key: 'cat', label: 'Cat Owners' },
            { key: 'loyalty', label: 'Loyalty Members' },
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
          <div className="row g-3">
            <div className="col-auto">
              <div className="search-box">
                <form className="position-relative">
                  <input className="form-control search-input search" type="search" placeholder="Search customers"
                    value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                  <span className="fas fa-search search-box-icon"></span>
                </form>
              </div>
            </div>
            <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
              <div className="btn-group position-static" role="group">
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {cityFilter || 'City'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setCityFilter(''); setPage(1); }}>All Cities</a></li>
                    {cities.map(c => (
                      <li key={c}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setCityFilter(c); setPage(1); }}>{c}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {petTypeFilter || 'Pet Type'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setPetTypeFilter(''); setPage(1); }}>All Types</a></li>
                    {petOwnerTypes.map(pt => (
                      <li key={pt}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setPetTypeFilter(pt); setPage(1); }}>{pt}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-link text-body me-4 px-0">
                <span className="fa-solid fa-file-export fs-9 me-2"></span>Export
              </button>
              <button className="btn btn-primary">
                <span className="fas fa-plus me-2"></span>Add customer
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar-overlay mx-n1 px-1">
            <table className="table table-sm fs-9 mb-0">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox"
                        checked={selectedRows.size === pageData.length && pageData.length > 0}
                        onChange={toggleAll} />
                    </div>
                  </th>
                  <th className="sort align-middle pe-5" scope="col" style={{width: '15%'}}>CUSTOMER</th>
                  <th className="sort align-middle pe-5" scope="col" style={{width: '18%'}}>EMAIL</th>
                  <th className="sort align-middle text-end" scope="col" style={{width: '8%'}}>ORDERS</th>
                  <th className="sort align-middle text-end ps-3" scope="col" style={{width: '10%'}}>TOTAL SPENT</th>
                  <th className="sort align-middle ps-7" scope="col" style={{width: '10%'}}>CITY</th>
                  <th className="sort align-middle ps-4" scope="col" style={{width: '10%'}}>PET TYPE</th>
                  <th className="sort align-middle text-center ps-4" scope="col" style={{width: '8%'}}>LOYALTY</th>
                  <th className="sort align-middle text-end" scope="col" style={{width: '10%'}}>LAST SEEN</th>
                  <th className="sort align-middle text-end pe-0" scope="col" style={{width: '11%', minWidth: 150}}>LAST ORDER</th>
                </tr>
              </thead>
              <tbody className="list">
                {pageData.map(customer => (
                  <tr key={customer.id} className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input className="form-check-input" type="checkbox"
                          checked={selectedRows.has(customer.id)} onChange={() => toggleRow(customer.id)} />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a className="d-flex align-items-center text-body-emphasis" href="/pet-shop/customer-details">
                        {customer.avatar ? (
                          <div className="avatar avatar-m"><img className="rounded-circle" src={customer.avatar} alt="" /></div>
                        ) : (
                          <div className="avatar avatar-m">
                            <div className="avatar-name rounded-circle"><span>{getInitial(customer.name)}</span></div>
                          </div>
                        )}
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">{customer.name}</p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a className="fw-semibold" href={`mailto:${customer.email}`}>{customer.email}</a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
                      {customer.totalOrders}
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
                      {formatCurrency(customer.totalSpent)}
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      {customer.city}
                    </td>
                    <td className="align-middle white-space-nowrap text-body-highlight ps-4 fs-10">
                      {customer.petOwnerType}
                    </td>
                    <td className="align-middle white-space-nowrap text-center ps-4">
                      <span className={`badge badge-phoenix fs-10 ${loyaltyBadgeClass(customer.loyaltyTier)}`}>
                        {customer.loyaltyTier}
                      </span>
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
                      {customer.lastSeen}
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
                      {customer.lastOrder}
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
