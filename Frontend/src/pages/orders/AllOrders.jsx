import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { orderService } from '../../services/api';

const formatCurrency = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

const STATUS_LABELS = {
  pending_payment: 'Pending Payment', payment_confirmed: 'Payment Confirmed', processing: 'Processing',
  packed: 'Packed', shipped: 'Shipped', out_for_delivery: 'Out for Delivery', delivered: 'Delivered',
  completed: 'Completed', cancelled: 'Cancelled', refunded: 'Refunded', delivery_failed: 'Delivery Failed',
  exchange_requested: 'Exchange Requested', returned: 'Returned',
};

const STATUS_BADGES = {
  pending_payment: 'badge-phoenix-warning', payment_confirmed: 'badge-phoenix-info', processing: 'badge-phoenix-primary',
  packed: 'badge-phoenix-info', shipped: 'badge-phoenix-primary', out_for_delivery: 'badge-phoenix-info',
  delivered: 'badge-phoenix-success', completed: 'badge-phoenix-success', cancelled: 'badge-phoenix-danger',
  refunded: 'badge-phoenix-danger', delivery_failed: 'badge-phoenix-danger', exchange_requested: 'badge-phoenix-warning',
  returned: 'badge-phoenix-secondary',
};

const PAYMENT_BADGES = { pending: 'badge-phoenix-warning', paid: 'badge-phoenix-success', failed: 'badge-phoenix-danger', refunded: 'badge-phoenix-secondary' };

export default function AllOrders({ filterStatus }) {
  usePhoenixInit();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(filterStatus || '');
  const [page, setPage] = useState(1);
  const perPage = 10;

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const params = {};
      if (filterStatus) {
        // Map display name to DB status
        const statusMap = {};
        Object.entries(STATUS_LABELS).forEach(([k, v]) => { statusMap[v] = k; });
        params.status = statusMap[filterStatus] || filterStatus;
      }
      const res = await orderService.getAll(params);
      setOrders(res.data || []);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    } finally {
      setLoading(false);
    }
  }, [filterStatus]);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const filtered = useMemo(() => {
    return orders.filter(o => {
      const matchSearch = !search || o.order_number.toLowerCase().includes(search.toLowerCase())
        || (o.customer?.name || '').toLowerCase().includes(search.toLowerCase());
      const matchStatus = !statusFilter || STATUS_LABELS[o.status] === statusFilter || o.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [orders, search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  // Order stats
  const stats = useMemo(() => ({
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending_payment').length,
    processing: orders.filter(o => ['processing', 'packed'].includes(o.status)).length,
    completed: orders.filter(o => ['delivered', 'completed'].includes(o.status)).length,
    cancelled: orders.filter(o => ['cancelled', 'refunded'].includes(o.status)).length,
  }), [orders]);

  if (loading) {
    return <div className="d-flex justify-content-center py-9"><div className="spinner-border text-primary" role="status"></div></div>;
  }

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item active">{filterStatus || 'All Orders'}</li>
        </ol>
      </nav>

      <div className="mb-9">
        <h2 className="mb-4">🛒 {filterStatus || 'All Orders'}</h2>

        {/* Summary Cards */}
        {!filterStatus && (
          <div className="row g-3 mb-4">
            {[
              { label: 'Total Orders', value: stats.total, icon: '📦', color: 'primary' },
              { label: 'Pending', value: stats.pending, icon: '⏳', color: 'warning' },
              { label: 'Processing', value: stats.processing, icon: '⚙️', color: 'info' },
              { label: 'Completed', value: stats.completed, icon: '✅', color: 'success' },
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
        )}

        {/* Filters */}
        <div className="d-flex flex-wrap gap-3 mb-4">
          <div className="search-box">
            <form className="position-relative">
              <input className="form-control search-input" type="search" placeholder="Search orders..."
                value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} />
              <span className="fas fa-search search-box-icon"></span>
            </form>
          </div>
          {!filterStatus && (
            <select className="form-select" style={{width: 'auto'}} value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1); }}>
              <option value="">All Status</option>
              {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          )}
        </div>

        {/* Table */}
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th className="align-middle">ORDER</th>
                  <th className="align-middle ps-4">CUSTOMER</th>
                  <th className="align-middle ps-4">DATE</th>
                  <th className="align-middle ps-4">ITEMS</th>
                  <th className="align-middle text-end ps-4">TOTAL</th>
                  <th className="align-middle text-center ps-4">PAYMENT</th>
                  <th className="align-middle text-center ps-4">STATUS</th>
                  <th className="align-middle text-end pe-0 ps-4">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {pageData.map(order => (
                  <tr key={order.id} className="position-static">
                    <td className="align-middle">
                      <a className="fw-semibold" href={`/orders/${order.id}`}>{order.order_number}</a>
                    </td>
                    <td className="align-middle ps-4 text-body-tertiary">{order.customer?.name || 'Unknown'}</td>
                    <td className="align-middle ps-4 text-body-tertiary fs-9">{new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                    <td className="align-middle ps-4 text-body-tertiary">{order.items?.length || 0}</td>
                    <td className="align-middle text-end ps-4 fw-bold">{formatCurrency(order.total)}</td>
                    <td className="align-middle text-center ps-4">
                      <span className={`badge ${PAYMENT_BADGES[order.payment_status] || 'badge-phoenix-secondary'}`}>
                        {(order.payment_status || 'unknown').replace('_', ' ')}
                      </span>
                    </td>
                    <td className="align-middle text-center ps-4">
                      <span className={`badge ${STATUS_BADGES[order.status] || 'badge-phoenix-secondary'}`}>
                        {STATUS_LABELS[order.status] || order.status}
                      </span>
                    </td>
                    <td className="align-middle text-end pe-0 ps-4">
                      <button className="btn btn-sm btn-phoenix-primary" onClick={() => navigate(`/orders/${order.id}`)}>
                        <span className="fas fa-eye"></span>
                      </button>
                    </td>
                  </tr>
                ))}
                {pageData.length === 0 && (
                  <tr><td colSpan="8" className="text-center py-4 text-body-tertiary">No orders found</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto">
              <p className="mb-0 fw-semibold text-body">
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
