import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { orderService } from '../../services/api';

const formatCurrency = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

const STATUS_LABELS = {
  pending_payment: 'Pending Payment', payment_confirmed: 'Payment Confirmed', processing: 'Processing',
  packed: 'Packed', shipped: 'Shipped', out_for_delivery: 'Out for Delivery', delivered: 'Delivered',
  completed: 'Completed', cancelled: 'Cancelled', refunded: 'Refunded', delivery_failed: 'Delivery Failed',
  exchange_requested: 'Exchange Requested', returned: 'Returned',
};

const STATUS_FLOW = ['pending_payment', 'payment_confirmed', 'processing', 'packed', 'shipped', 'out_for_delivery', 'delivered', 'completed'];

export default function EnhancedOrderDetails() {
  usePhoenixInit();
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchOrder = useCallback(async () => {
    try {
      setLoading(true);
      const res = await orderService.getById(id);
      setOrder(res.data);
    } catch (err) {
      console.error('Failed to fetch order:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => { fetchOrder(); }, [fetchOrder]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const handleStatusUpdate = async (newStatus) => {
    try {
      setUpdating(true);
      await orderService.updateStatus(id, newStatus);
      await fetchOrder();
    } catch (err) {
      alert(err.message || 'Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <div className="d-flex justify-content-center py-9"><div className="spinner-border text-primary" role="status"></div></div>;
  }

  if (!order) {
    return <div className="text-center py-9"><h4>Order not found</h4><a href="/orders" className="btn btn-primary mt-3">Back to Orders</a></div>;
  }

  const currentIndex = STATUS_FLOW.indexOf(order.status);

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/orders">Orders</a></li>
          <li className="breadcrumb-item active">{order.order_number}</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">Order {order.order_number}</h2>
            <p className="text-body-tertiary mb-0 fs-9">
              Placed on {new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-phoenix-secondary" onClick={() => navigate('/orders')}>
              <span className="fas fa-arrow-left me-2"></span>Back
            </button>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="card border border-translucent mb-4">
          <div className="card-body">
            <h5 className="mb-3">Order Timeline</h5>
            <div className="d-flex justify-content-between position-relative mb-3">
              {STATUS_FLOW.map((status, i) => (
                <div key={status} className="text-center" style={{flex: 1}}>
                  <div className={`rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center ${
                    i <= currentIndex ? 'bg-primary text-white' : 'bg-body-secondary text-body-tertiary'
                  }`} style={{width: 32, height: 32, fontSize: '0.7rem'}}>
                    {i <= currentIndex ? <span className="fas fa-check"></span> : (i + 1)}
                  </div>
                  <span className="fs-10 text-body-tertiary">{STATUS_LABELS[status]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-3">
          {/* Order Info */}
          <div className="col-lg-8">
            <div className="card border border-translucent mb-3">
              <div className="card-header"><h5 className="mb-0">Order Items</h5></div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table fs-9 mb-0">
                    <thead><tr><th>ITEM</th><th className="text-end">PRICE</th><th className="text-center">QTY</th><th className="text-end">SUBTOTAL</th></tr></thead>
                    <tbody>
                      {(order.items || []).map((item, i) => (
                        <tr key={i}>
                          <td className="fw-semibold">{item.name}</td>
                          <td className="text-end">{formatCurrency(item.price)}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td className="text-end fw-bold">{formatCurrency(item.subtotal)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="border-top">
                      <tr><td colSpan="3" className="text-end fw-semibold">Subtotal</td><td className="text-end">{formatCurrency(order.subtotal)}</td></tr>
                      {order.discount > 0 && <tr><td colSpan="3" className="text-end text-success">Discount</td><td className="text-end text-success">-{formatCurrency(order.discount)}</td></tr>}
                      {order.shipping_cost > 0 && <tr><td colSpan="3" className="text-end">Shipping</td><td className="text-end">{formatCurrency(order.shipping_cost)}</td></tr>}
                      {order.tax > 0 && <tr><td colSpan="3" className="text-end">Tax (GST)</td><td className="text-end">{formatCurrency(order.tax)}</td></tr>}
                      <tr className="fw-bold fs-8"><td colSpan="3" className="text-end">Total</td><td className="text-end">{formatCurrency(order.total)}</td></tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            {/* Notes */}
            {(order.customer_notes || order.admin_notes) && (
              <div className="card border border-translucent">
                <div className="card-header"><h5 className="mb-0">Notes</h5></div>
                <div className="card-body">
                  {order.customer_notes && <div className="mb-2"><strong>Customer:</strong> {order.customer_notes}</div>}
                  {order.admin_notes && <div><strong>Admin:</strong> {order.admin_notes}</div>}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Status Update */}
            <div className="card border border-translucent mb-3">
              <div className="card-header"><h5 className="mb-0">Update Status</h5></div>
              <div className="card-body">
                <select className="form-select mb-3" value={order.status} onChange={e => handleStatusUpdate(e.target.value)} disabled={updating}>
                  {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
                {updating && <div className="text-center"><span className="spinner-border spinner-border-sm"></span></div>}
              </div>
            </div>

            {/* Customer Info */}
            <div className="card border border-translucent mb-3">
              <div className="card-header"><h5 className="mb-0">Customer</h5></div>
              <div className="card-body">
                <p className="fw-semibold mb-1">{order.customer?.name || 'Unknown'}</p>
                <p className="text-body-tertiary fs-9 mb-1">{order.customer?.email}</p>
                <p className="text-body-tertiary fs-9 mb-0">{order.customer?.phone}</p>
              </div>
            </div>

            {/* Payment */}
            <div className="card border border-translucent mb-3">
              <div className="card-header"><h5 className="mb-0">Payment</h5></div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-1">
                  <span>Method</span><span className="fw-semibold text-uppercase">{order.payment_method}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Status</span>
                  <span className={`badge ${order.payment_status === 'paid' ? 'badge-phoenix-success' : 'badge-phoenix-warning'}`}>
                    {order.payment_status}
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping */}
            {order.tracking_number && (
              <div className="card border border-translucent">
                <div className="card-header"><h5 className="mb-0">Shipping</h5></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1"><span>Carrier</span><span className="fw-semibold">{order.carrier}</span></div>
                  <div className="d-flex justify-content-between mb-1"><span>Tracking</span><span className="fw-semibold">{order.tracking_number}</span></div>
                  {order.shipped_at && <div className="d-flex justify-content-between"><span>Shipped</span><span>{new Date(order.shipped_at).toLocaleDateString('en-IN')}</span></div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
