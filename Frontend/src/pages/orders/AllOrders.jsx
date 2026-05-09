import { useState, useEffect, useMemo } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { ordersData, formatCurrency } from '../ecommerce/admin/petShopData';

const orderStatuses = ['All', 'Pending Payment', 'Payment Confirmed', 'Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered', 'Completed', 'Cancelled', 'Refunded'];

// Enrich orders with workflow statuses
const enrichedOrders = ordersData.map(o => {
  const statusMap = {
    'Pending': 'Pending Payment', 'Paid': 'Payment Confirmed',
    'Processing': 'Processing', 'Shipped': 'Shipped',
    'Delivered': 'Delivered', 'Cancelled': 'Cancelled', 'Refunded': 'Refunded',
    'Ready to pickup': 'Processing',
  };
  return { ...o, workflowStatus: statusMap[o.fulfillmentStatus?.label] || statusMap[o.paymentStatus?.label] || 'Pending Payment' };
});

export default function AllOrders({ filterStatus }) {
  usePhoenixInit();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(filterStatus || 'All');
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const perPage = 10;
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const filtered = useMemo(() => enrichedOrders.filter(o => {
    const matchSearch = !search || o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || o.workflowStatus === statusFilter;
    return matchSearch && matchStatus;
  }), [search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  const toggleRow = (id) => { setSelectedRows(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; }); };
  const toggleAll = () => { setSelectedRows(selectedRows.size === pageData.length ? new Set() : new Set(pageData.map(o => o.id))); };

  const statusCounts = {};
  orderStatuses.forEach(s => { statusCounts[s] = s === 'All' ? enrichedOrders.length : enrichedOrders.filter(o => o.workflowStatus === s).length; });

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/orders">Orders</a></li>
          <li className="breadcrumb-item active">{filterStatus || 'All Orders'}</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">🛒 {filterStatus || 'All Orders'}</h2></div>
        </div>

        {/* Status Tabs */}
        {!filterStatus && (
          <ul className="nav nav-links mb-3 mb-lg-2 mx-n3" style={{overflowX: 'auto', flexWrap: 'nowrap'}}>
            {orderStatuses.map(s => (
              <li key={s} className="nav-item">
                <a className={`nav-link text-nowrap ${statusFilter === s ? 'active' : ''}`} href="#"
                  onClick={(e) => { e.preventDefault(); setStatusFilter(s); setPage(1); }}>
                  {s} <span className="text-body-tertiary">({statusCounts[s]})</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Search & Actions */}
        <div className="d-flex flex-wrap gap-3 mb-4">
          <div className="search-box">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search orders..."
                value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
              <span className="fas fa-search search-box-icon"></span>
            </form>
          </div>
          <div className="ms-xxl-auto">
            <button className="btn btn-link text-body me-4 px-0"><span className="fa-solid fa-file-export fs-9 me-2"></span>Export</button>
            <button className="btn btn-link text-body px-0"><span className="fa-solid fa-print fs-9 me-2"></span>Print Invoices</button>
          </div>
        </div>

        {selectedRows.size > 0 && (
          <div className="alert alert-phoenix-info d-flex align-items-center mb-3">
            <span className="me-3">{selectedRows.size} selected</span>
            <button className="btn btn-sm btn-phoenix-primary me-2">Update Status</button>
            <button className="btn btn-sm btn-phoenix-secondary me-2">Print Invoices</button>
            <button className="btn btn-sm btn-phoenix-secondary">Export</button>
          </div>
        )}

        {/* Table */}
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th style={{width: 18}}><div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" checked={selectedRows.size === pageData.length && pageData.length > 0} onChange={toggleAll} /></div></th>
                  <th className="align-middle">ORDER ID</th>
                  <th className="align-middle">CUSTOMER</th>
                  <th className="align-middle">DATE</th>
                  <th className="align-middle">ITEMS</th>
                  <th className="align-middle text-end">TOTAL</th>
                  <th className="align-middle text-center">PAYMENT</th>
                  <th className="align-middle text-center">STATUS</th>
                  <th className="align-middle">DELIVERY</th>
                  <th className="text-end align-middle pe-0"></th>
                </tr>
              </thead>
              <tbody>
                {pageData.map(order => (
                  <tr key={order.id}>
                    <td><div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" checked={selectedRows.has(order.id)} onChange={() => toggleRow(order.id)} /></div></td>
                    <td className="align-middle"><a className="fw-semibold" href={`/orders/${order.id.replace('#', '')}`}>{order.id}</a></td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        {order.customer.avatar ? (
                          <div className="avatar avatar-s me-2"><img className="rounded-circle" src={order.customer.avatar} alt="" /></div>
                        ) : (
                          <div className="avatar avatar-s me-2"><div className="avatar-name rounded-circle"><span>{order.customer.name.charAt(0)}</span></div></div>
                        )}
                        <span>{order.customer.name}</span>
                      </div>
                    </td>
                    <td className="align-middle text-body-tertiary">{order.date}</td>
                    <td className="align-middle text-body-tertiary">{order.items.length} items</td>
                    <td className="align-middle text-end fw-bold">{formatCurrency(order.total)}</td>
                    <td className="align-middle text-center"><span className={`badge ${order.paymentStatus.type}`}>{order.paymentStatus.label}</span></td>
                    <td className="align-middle text-center"><span className={`badge ${order.fulfillmentStatus.type}`}>{order.fulfillmentStatus.label}</span></td>
                    <td className="align-middle text-body-tertiary fs-10">{order.deliveryType}</td>
                    <td className="align-middle text-end pe-0">
                      <div className="btn-reveal-trigger position-static">
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button" data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                          <span className="fas fa-ellipsis-h fs-10"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a className="dropdown-item" href={`/orders/${order.id.replace('#', '')}`}>View Details</a>
                          <a className="dropdown-item" href="#">Print Invoice</a>
                          <a className="dropdown-item" href="#">Update Status</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#">Cancel Order</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto"><p className="mb-0 fw-semibold text-body">{filtered.length > 0 ? `${(page-1)*perPage+1} to ${Math.min(page*perPage, filtered.length)} of ${filtered.length}` : 'No results'}</p></div>
            <div className="col-auto d-flex">
              <button className="page-link" disabled={page <= 1} onClick={() => setPage(p => p - 1)}><span className="fas fa-chevron-left"></span></button>
              <ul className="mb-0 pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}><button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button></li>
                ))}
              </ul>
              <button className="page-link pe-0" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}><span className="fas fa-chevron-right"></span></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
