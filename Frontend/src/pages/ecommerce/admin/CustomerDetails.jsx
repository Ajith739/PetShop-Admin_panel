import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { customerService } from '../../../services/api';

const formatCurrency = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

const STATUS_LABELS = {
  pending_payment: 'Pending', payment_confirmed: 'Confirmed', processing: 'Processing',
  packed: 'Packed', shipped: 'Shipped', delivered: 'Delivered', completed: 'Completed',
  cancelled: 'Cancelled', refunded: 'Refunded',
};

export default function CustomerDetails() {
  usePhoenixInit();
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCustomer = useCallback(async () => {
    try {
      setLoading(true);
      const res = await customerService.getById(id);
      setCustomer(res.data);
    } catch (err) {
      console.error('Failed to fetch customer:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => { fetchCustomer(); }, [fetchCustomer]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  if (loading) {
    return <div className="d-flex justify-content-center py-9"><div className="spinner-border text-primary" role="status"></div></div>;
  }

  if (!customer) {
    return <div className="text-center py-9"><h4>Customer not found</h4><a href="/customers" className="btn btn-primary mt-3">Back to Customers</a></div>;
  }

  const addr = customer.billing_address || {};

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/customers">Customers</a></li>
          <li className="breadcrumb-item active">{customer.name}</li>
        </ol>
      </nav>

      <div className="mb-9">
        {/* Header */}
        <div className="row g-3 mb-4 align-items-center">
          <div className="col-auto">
            <div className="avatar avatar-4xl">
              <div className="avatar-name rounded-circle" style={{fontSize: '2rem'}}><span>{customer.name.charAt(0)}</span></div>
            </div>
          </div>
          <div className="col">
            <h2 className="mb-1">{customer.name}</h2>
            <div className="d-flex flex-wrap gap-3 text-body-tertiary">
              <span><span className="fas fa-envelope me-1"></span>{customer.email}</span>
              {customer.phone && <span><span className="fas fa-phone me-1"></span>{customer.phone}</span>}
              {addr.city && <span><span className="fas fa-map-marker-alt me-1"></span>{addr.city}</span>}
            </div>
            <div className="mt-2">
              <span className={`badge badge-phoenix fs-10 ${customer.status === 'active' ? 'badge-phoenix-success' : customer.status === 'banned' ? 'badge-phoenix-danger' : 'badge-phoenix-secondary'}`}>
                {customer.status}
              </span>
            </div>
          </div>
          <div className="col-auto">
            <button className="btn btn-phoenix-secondary me-2" onClick={() => navigate('/customers')}>
              <span className="fas fa-arrow-left me-1"></span>Back
            </button>
          </div>
        </div>

        <div className="row g-3">
          {/* Left Column */}
          <div className="col-12 col-xl-8">
            {/* Contact Info */}
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-id-card me-2 text-primary"></span>Contact Information</h4>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Email</h6>
                    <a href={`mailto:${customer.email}`}>{customer.email}</a>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Phone</h6>
                    <p className="mb-0 text-body-tertiary">{customer.phone || 'Not provided'}</p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Billing Address</h6>
                    <p className="mb-0 text-body-tertiary">
                      {addr.street && <>{addr.street}<br /></>}
                      {addr.city && <>{addr.city}, {addr.state}<br /></>}
                      {addr.pincode && <>{addr.pincode}, {addr.country}</>}
                      {!addr.street && 'Not provided'}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Date of Birth</h6>
                    <p className="mb-0 text-body-tertiary">
                      {customer.date_of_birth ? new Date(customer.date_of_birth).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Not provided'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders */}
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-shopping-bag me-2 text-primary"></span>Order History</h4>
                {(!customer.orders || customer.orders.length === 0) ? (
                  <p className="text-body-tertiary mb-0">No orders found.</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-sm fs-9 mb-0">
                      <thead><tr><th>ORDER</th><th className="text-end">TOTAL</th><th>PAYMENT</th><th>STATUS</th><th className="text-end">DATE</th></tr></thead>
                      <tbody>
                        {customer.orders.map(order => (
                          <tr key={order.id}>
                            <td><a className="fw-semibold" href={`/orders/${order.id}`}>{order.order_number}</a></td>
                            <td className="text-end fw-semibold">{formatCurrency(order.total)}</td>
                            <td>
                              <span className={`badge badge-phoenix fs-10 ${order.payment_status === 'paid' ? 'badge-phoenix-success' : 'badge-phoenix-warning'}`}>
                                {order.payment_status}
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-phoenix badge-phoenix-info fs-10">
                                {STATUS_LABELS[order.status] || order.status}
                              </span>
                            </td>
                            <td className="text-end text-body-tertiary">{new Date(order.created_at).toLocaleDateString('en-IN')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-xl-4">
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-chart-bar me-2 text-primary"></span>Summary</h4>
                <div className="d-flex justify-content-between mb-3 border-bottom border-translucent pb-3">
                  <h6 className="mb-0">Total Orders</h6>
                  <p className="mb-0 fw-bold">{customer.total_orders || 0}</p>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom border-translucent pb-3">
                  <h6 className="mb-0">Total Spent</h6>
                  <p className="mb-0 fw-bold text-body-emphasis">{formatCurrency(customer.total_spent || 0)}</p>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom border-translucent pb-3">
                  <h6 className="mb-0">Status</h6>
                  <span className={`badge badge-phoenix fs-10 ${customer.status === 'active' ? 'badge-phoenix-success' : 'badge-phoenix-secondary'}`}>
                    {customer.status}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">Member Since</h6>
                  <p className="mb-0 text-body-tertiary">{new Date(customer.created_at).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</p>
                </div>
              </div>
            </div>

            {customer.notes && (
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-3"><span className="fas fa-sticky-note me-2 text-primary"></span>Notes</h4>
                  <p className="text-body-tertiary mb-0">{customer.notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
