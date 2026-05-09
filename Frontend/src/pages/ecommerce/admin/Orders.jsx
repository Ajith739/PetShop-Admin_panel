import { useState, useEffect, useMemo } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { ordersData, formatCurrency } from './petShopData';

export default function Orders() {
  usePhoenixInit();

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('');
  const [fulfillmentFilter, setFulfillmentFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const perPage = 10;

  useEffect(() => { if (window.feather) window.feather.replace(); });

  const filtered = useMemo(() => {
    return ordersData.filter(o => {
      const matchSearch = !search || o.id.toLowerCase().includes(search.toLowerCase()) ||
        o.customer.name.toLowerCase().includes(search.toLowerCase());
      const matchTab = activeTab === 'all' ||
        (activeTab === 'pending' && o.paymentStatus.label === 'Pending') ||
        (activeTab === 'processing' && o.fulfillmentStatus.label === 'Processing') ||
        (activeTab === 'delivered' && o.fulfillmentStatus.label === 'Delivered') ||
        (activeTab === 'refunded' && o.paymentStatus.label === 'Refunded') ||
        (activeTab === 'cancelled' && o.fulfillmentStatus.label === 'Cancelled');
      const matchPayment = !paymentFilter || o.paymentStatus.label === paymentFilter;
      const matchFulfillment = !fulfillmentFilter || o.fulfillmentStatus.label === fulfillmentFilter;
      return matchSearch && matchTab && matchPayment && matchFulfillment;
    });
  }, [search, activeTab, paymentFilter, fulfillmentFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  const counts = {
    all: ordersData.length,
    pending: ordersData.filter(o => o.paymentStatus.label === 'Pending').length,
    processing: ordersData.filter(o => o.fulfillmentStatus.label === 'Processing').length,
    delivered: ordersData.filter(o => o.fulfillmentStatus.label === 'Delivered').length,
    refunded: ordersData.filter(o => o.paymentStatus.label === 'Refunded').length,
    cancelled: ordersData.filter(o => o.fulfillmentStatus.label === 'Cancelled').length,
  };

  const paymentStatuses = ['Paid', 'Pending', 'Failed', 'Refunded'];
  const fulfillmentStatuses = ['Delivered', 'Shipped', 'Processing', 'Ready to pickup', 'Cancelled', 'Returned', 'Pending'];

  const toggleRow = (id) => {
    setSelectedRows(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === pageData.length) setSelectedRows(new Set());
    else setSelectedRows(new Set(pageData.map(o => o.id)));
  };

  const getInitial = (name) => name.charAt(0).toUpperCase();

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pet-shop/orders">Orders</a></li>
          <li className="breadcrumb-item active">Order list</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Orders</h2>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
          {[
            { key: 'all', label: 'All' },
            { key: 'pending', label: 'Pending' },
            { key: 'processing', label: 'Processing' },
            { key: 'delivered', label: 'Delivered' },
            { key: 'refunded', label: 'Refunded' },
            { key: 'cancelled', label: 'Cancelled' },
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
                  <input className="form-control search-input search" type="search" placeholder="Search orders"
                    value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                  <span className="fas fa-search search-box-icon"></span>
                </form>
              </div>
            </div>
            <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
              <div className="btn-group position-static" role="group">
                <div className="btn-group position-static text-nowrap" role="group">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {paymentFilter || 'Payment status'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setPaymentFilter(''); setPage(1); }}>All</a></li>
                    {paymentStatuses.map(s => (
                      <li key={s}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setPaymentFilter(s); setPage(1); }}>{s}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="btn-group position-static text-nowrap" role="group">
                  <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {fulfillmentFilter || 'Fulfillment status'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setFulfillmentFilter(''); setPage(1); }}>All</a></li>
                    {fulfillmentStatuses.map(s => (
                      <li key={s}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setFulfillmentFilter(s); setPage(1); }}>{s}</a></li>
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
                <span className="fas fa-plus me-2"></span>Add order
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table table-sm fs-9 mb-0">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 align-middle ps-0" style={{width: 26}}>
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox"
                        checked={selectedRows.size === pageData.length && pageData.length > 0}
                        onChange={toggleAll} />
                    </div>
                  </th>
                  <th className="sort white-space-nowrap align-middle pe-3" scope="col" style={{width: '5%'}}>ORDER</th>
                  <th className="sort align-middle text-end" scope="col" style={{width: '6%'}}>TOTAL</th>
                  <th className="sort align-middle ps-8" scope="col" style={{width: '28%', minWidth: 250}}>CUSTOMER</th>
                  <th className="sort align-middle pe-3" scope="col" style={{width: '10%'}}>PAYMENT STATUS</th>
                  <th className="sort align-middle text-start pe-3" scope="col" style={{width: '12%', minWidth: 200}}>FULFILLMENT STATUS</th>
                  <th className="sort align-middle text-start" scope="col" style={{width: '15%'}}>DELIVERY TYPE</th>
                  <th className="sort align-middle text-end pe-0" scope="col">DATE</th>
                </tr>
              </thead>
              <tbody className="list">
                {pageData.map(order => (
                  <tr key={order.id} className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input className="form-check-input" type="checkbox"
                          checked={selectedRows.has(order.id)} onChange={() => toggleRow(order.id)} />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="/pet-shop/order-details">{order.id}</a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      {formatCurrency(order.total)}
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a className="d-flex align-items-center text-body" href="/pet-shop/customer-details">
                        {order.customer.avatar ? (
                          <div className="avatar avatar-m"><img className="rounded-circle" src={order.customer.avatar} alt="" /></div>
                        ) : (
                          <div className="avatar avatar-m">
                            <div className="avatar-name rounded-circle"><span>{getInitial(order.customer.name)}</span></div>
                          </div>
                        )}
                        <h6 className="mb-0 ms-3 text-body">{order.customer.name}</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className={`badge badge-phoenix fs-10 ${order.paymentStatus.type}`}>
                        <span className="badge-label">{order.paymentStatus.label}</span>
                        <span className="ms-1" data-feather={order.paymentStatus.icon} style={{height: '12.8px', width: '12.8px'}}></span>
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className={`badge badge-phoenix fs-10 ${order.fulfillmentStatus.type}`}>
                        <span className="badge-label">{order.fulfillmentStatus.label}</span>
                        <span className="ms-1" data-feather={order.fulfillmentStatus.icon} style={{height: '12.8px', width: '12.8px'}}></span>
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      {order.deliveryType}
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      {order.date}
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
