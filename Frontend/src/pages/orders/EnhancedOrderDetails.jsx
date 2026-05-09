import { useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { ordersData, formatCurrency } from '../ecommerce/admin/petShopData';

const sampleOrder = ordersData[0];
const timeline = [
  { stage: 'Order Placed', date: 'May 5, 12:56 PM', status: 'complete', icon: 'fas fa-shopping-cart' },
  { stage: 'Payment Received', date: 'May 5, 12:58 PM', status: 'complete', icon: 'fas fa-credit-card' },
  { stage: 'Processing', date: 'May 5, 2:00 PM', status: 'complete', icon: 'fas fa-cog' },
  { stage: 'Packed', date: 'May 5, 4:30 PM', status: 'complete', icon: 'fas fa-box' },
  { stage: 'Shipped', date: 'May 6, 9:00 AM', status: 'complete', icon: 'fas fa-truck' },
  { stage: 'Out for Delivery', date: 'May 7, 10:15 AM', status: 'complete', icon: 'fas fa-motorcycle' },
  { stage: 'Delivered', date: 'May 7, 2:30 PM', status: 'complete', icon: 'fas fa-check-circle' },
  { stage: 'Completed', date: 'May 8, 2:30 PM', status: 'current', icon: 'fas fa-flag-checkered' },
];

export default function EnhancedOrderDetails() {
  usePhoenixInit();
  useEffect(() => { if (window.feather) window.feather.replace(); });

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/orders">Orders</a></li>
          <li className="breadcrumb-item active">{sampleOrder.id}</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
          <div>
            <h2 className="mb-1">Order {sampleOrder.id}</h2>
            <p className="text-body-tertiary mb-0">Placed on {sampleOrder.date}</p>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <div className="btn-group">
              <button className="btn btn-phoenix-primary dropdown-toggle" data-bs-toggle="dropdown">Update Status</button>
              <ul className="dropdown-menu">
                {['Processing','Packed','Shipped','Out for Delivery','Delivered','Cancelled'].map(s => (
                  <li key={s}><a className="dropdown-item" href="#">{s}</a></li>
                ))}
              </ul>
            </div>
            <button className="btn btn-phoenix-secondary"><span className="fas fa-print me-2"></span>Invoice</button>
            <button className="btn btn-phoenix-secondary"><span className="fas fa-box me-2"></span>Packing Slip</button>
            <button className="btn btn-phoenix-secondary"><span className="fas fa-envelope me-2"></span>Send Tracking</button>
            <button className="btn btn-phoenix-danger"><span className="fas fa-times me-2"></span>Cancel</button>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Column */}
          <div className="col-12 col-xl-8">
            {/* Order Timeline */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">📋 Order Timeline</h5></div>
              <div className="card-body">
                <div className="d-flex flex-wrap justify-content-between position-relative">
                  <div className="position-absolute" style={{top: 14, left: '5%', right: '5%', height: 3, background: 'var(--phoenix-border-color)', zIndex: 0}}></div>
                  {timeline.map((step, i) => (
                    <div key={i} className="text-center position-relative" style={{zIndex: 1, flex: '1 1 0', minWidth: 80}}>
                      <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${
                        step.status === 'complete' ? 'bg-success' : step.status === 'current' ? 'bg-primary' : 'bg-body-secondary'
                      }`} style={{width: 30, height: 30}}>
                        <span className={`${step.icon} text-white fs-10`}></span>
                      </div>
                      <p className={`mb-0 fs-10 fw-semibold ${step.status === 'current' ? 'text-primary' : step.status === 'complete' ? 'text-success' : 'text-body-tertiary'}`}>{step.stage}</p>
                      <p className="mb-0 fs-10 text-body-quaternary">{step.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">🛍️ Order Items</h5></div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table fs-9 mb-0">
                    <thead>
                      <tr>
                        <th className="align-middle ps-3">ITEM</th>
                        <th className="align-middle">CATEGORY</th>
                        <th className="align-middle text-end">PRICE</th>
                        <th className="align-middle text-center">QTY</th>
                        <th className="align-middle text-end pe-3">SUBTOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleOrder.items.map((item, i) => (
                        <tr key={i}>
                          <td className="align-middle ps-3 fw-semibold">{item.name}</td>
                          <td className="align-middle text-body-tertiary">Pet Supplies</td>
                          <td className="align-middle text-end">{formatCurrency(item.price)}</td>
                          <td className="align-middle text-center">{item.qty}</td>
                          <td className="align-middle text-end pe-3 fw-bold">{formatCurrency(item.price * item.qty)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">💰 Order Summary</h5></div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 offset-md-6">
                    <table className="table fs-9 mb-0">
                      <tbody>
                        <tr><td className="text-body-tertiary">Subtotal</td><td className="text-end fw-semibold">{formatCurrency(sampleOrder.total)}</td></tr>
                        <tr><td className="text-body-tertiary">Discount</td><td className="text-end fw-semibold text-danger">-₹0</td></tr>
                        <tr><td className="text-body-tertiary">Shipping</td><td className="text-end fw-semibold">₹99</td></tr>
                        <tr><td className="text-body-tertiary">Tax (GST 18%)</td><td className="text-end fw-semibold">{formatCurrency(Math.round(sampleOrder.total * 0.18))}</td></tr>
                        <tr className="border-top"><td className="fw-bold fs-8">Total</td><td className="text-end fw-bold fs-8">{formatCurrency(Math.round(sampleOrder.total * 1.18 + 99))}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Notes */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">📝 Order Notes</h5></div>
              <div className="card-body">
                <div className="mb-3 p-3 bg-body-secondary rounded">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-semibold text-body-emphasis">Customer Note</span>
                    <span className="text-body-quaternary fs-10">May 5, 12:56 PM</span>
                  </div>
                  <p className="mb-0 text-body-tertiary">Please deliver before evening. My dog needs the food urgently.</p>
                </div>
                <div className="mb-3 p-3 bg-body-secondary rounded">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-semibold text-body-emphasis">Admin Note</span>
                    <span className="text-body-quaternary fs-10">May 5, 2:00 PM</span>
                  </div>
                  <p className="mb-0 text-body-tertiary">Priority processing - customer is a Gold member.</p>
                </div>
                <div className="mt-3">
                  <textarea className="form-control mb-2" rows="2" placeholder="Add a note..."></textarea>
                  <button className="btn btn-sm btn-primary">Add Note</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-xl-4">
            {/* Customer Info */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">👤 Customer Info</h5></div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  {sampleOrder.customer.avatar ? (
                    <div className="avatar avatar-l me-3"><img className="rounded-circle" src={sampleOrder.customer.avatar} alt="" /></div>
                  ) : (
                    <div className="avatar avatar-l me-3"><div className="avatar-name rounded-circle"><span>{sampleOrder.customer.name.charAt(0)}</span></div></div>
                  )}
                  <div>
                    <h6 className="mb-0">{sampleOrder.customer.name}</h6>
                    <span className="badge badge-phoenix-warning">Gold Member</span>
                  </div>
                </div>
                <div className="mb-2"><span className="fas fa-envelope text-body-tertiary me-2"></span>priya.sharma@gmail.com</div>
                <div className="mb-2"><span className="fas fa-phone text-body-tertiary me-2"></span>+91 98765 43210</div>
                <hr />
                <h6 className="fs-9 mb-2">Billing Address</h6>
                <p className="text-body-tertiary fs-9 mb-3">42 Anna Nagar, Chennai 600040</p>
                <h6 className="fs-9 mb-2">Shipping Address</h6>
                <p className="text-body-tertiary fs-9 mb-0">42 Anna Nagar, Chennai 600040</p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">💳 Payment</h5></div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-body-tertiary">Method</span>
                  <span className="fw-semibold">{sampleOrder.deliveryType}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-body-tertiary">Status</span>
                  <span className={`badge ${sampleOrder.paymentStatus.type}`}>{sampleOrder.paymentStatus.label}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-body-tertiary">Transaction ID</span>
                  <span className="fw-semibold">TXN-2026-00847</span>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">🚚 Shipping</h5></div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2"><span className="text-body-tertiary">Carrier</span><span className="fw-semibold">BlueDart Express</span></div>
                <div className="d-flex justify-content-between mb-2"><span className="text-body-tertiary">Tracking #</span><span className="fw-semibold text-primary">BD123456789</span></div>
                <div className="d-flex justify-content-between mb-2"><span className="text-body-tertiary">Shipped</span><span className="fw-semibold">May 6, 9:00 AM</span></div>
                <div className="d-flex justify-content-between"><span className="text-body-tertiary">Est. Delivery</span><span className="fw-semibold">May 8, 2026</span></div>
              </div>
            </div>

            {/* Documents (Pet Orders) */}
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">📄 Documents</h5></div>
              <div className="card-body">
                <button className="btn btn-sm btn-phoenix-primary w-100 mb-2"><span className="fas fa-file-medical me-2"></span>Health Certificate</button>
                <button className="btn btn-sm btn-phoenix-primary w-100 mb-2"><span className="fas fa-syringe me-2"></span>Vaccination Records</button>
                <button className="btn btn-sm btn-phoenix-primary w-100 mb-2"><span className="fas fa-exchange-alt me-2"></span>Pet Transfer Certificate</button>
                <button className="btn btn-sm btn-phoenix-secondary w-100"><span className="fas fa-file-invoice me-2"></span>Download Invoice</button>
              </div>
            </div>

            {/* Refund */}
            <div className="card border border-translucent">
              <div className="card-header"><h5 className="mb-0">💸 Refund</h5></div>
              <div className="card-body">
                <button className="btn btn-phoenix-danger w-100"><span className="fas fa-undo me-2"></span>Process Refund</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
