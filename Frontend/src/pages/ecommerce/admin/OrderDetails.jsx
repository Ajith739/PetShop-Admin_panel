import { useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { ordersData, formatCurrency } from './petShopData';

export default function OrderDetails() {
  usePhoenixInit();
  useEffect(() => { if (window.feather) window.feather.replace(); });

  // Use first order as demo
  const order = ordersData[0];

  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 99;
  const tax = Math.round(subtotal * 0.18);
  const discount = 0;
  const grandTotal = subtotal + shipping + tax - discount;

  const timeline = [
    { status: 'Order Placed', date: order.date, icon: 'shopping-cart', color: 'success', desc: 'Order was placed by the customer' },
    { status: 'Payment Confirmed', date: 'May 5, 1:00 PM', icon: 'credit-card', color: 'success', desc: 'Payment of ' + formatCurrency(order.total) + ' received' },
    { status: 'Order Shipped', date: 'May 6, 9:30 AM', icon: 'truck', color: 'info', desc: 'Package dispatched via BlueDart — Tracking: BD987654321' },
    { status: 'Delivered', date: 'May 7, 2:15 PM', icon: 'check-circle', color: 'success', desc: 'Package delivered successfully' },
  ];

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pet-shop/orders">Orders</a></li>
          <li className="breadcrumb-item active">Order details</li>
        </ol>
      </nav>

      <div className="mb-9">
        {/* Order Header */}
        <div className="row g-3 mb-4 align-items-center">
          <div className="col">
            <h2 className="mb-1">Order {order.id}</h2>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <span className="text-body-tertiary">{order.date}</span>
              <span className={`badge badge-phoenix fs-10 ${order.paymentStatus.type}`}>
                <span className="badge-label">{order.paymentStatus.label}</span>
                <span className="ms-1" data-feather={order.paymentStatus.icon} style={{height: '12.8px', width: '12.8px'}}></span>
              </span>
              <span className={`badge badge-phoenix fs-10 ${order.fulfillmentStatus.type}`}>
                <span className="badge-label">{order.fulfillmentStatus.label}</span>
                <span className="ms-1" data-feather={order.fulfillmentStatus.icon} style={{height: '12.8px', width: '12.8px'}}></span>
              </span>
            </div>
          </div>
          <div className="col-auto">
            <button className="btn btn-phoenix-secondary me-2"><span className="fas fa-print me-1"></span>Print</button>
            <button className="btn btn-phoenix-primary me-2"><span className="fas fa-undo me-1"></span>Refund</button>
            <button className="btn btn-primary"><span className="fas fa-check me-1"></span>Update Status</button>
          </div>
        </div>

        <div className="row g-3">
          {/* Left Column */}
          <div className="col-12 col-xl-8">
            {/* Order Items */}
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-box me-2 text-primary"></span>Order Items</h4>
                <div className="table-responsive">
                  <table className="table table-sm fs-9 mb-0">
                    <thead>
                      <tr>
                        <th className="text-body-highlight" style={{width: '50%'}}>PRODUCT</th>
                        <th className="text-body-highlight text-center">QTY</th>
                        <th className="text-body-highlight text-end">UNIT PRICE</th>
                        <th className="text-body-highlight text-end">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <span className="me-2 fs-5">🐾</span>
                              <div>
                                <h6 className="mb-0 text-body-highlight">{item.name}</h6>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-center fw-semibold text-body-highlight">{item.qty}</td>
                          <td className="align-middle text-end text-body-tertiary">{formatCurrency(item.price)}</td>
                          <td className="align-middle text-end fw-bold text-body-emphasis">{formatCurrency(item.price * item.qty)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Order Summary */}
                <div className="border-top border-translucent mt-4 pt-4">
                  <div className="row justify-content-end">
                    <div className="col-sm-6 col-md-5 col-lg-4">
                      <div className="d-flex justify-content-between mb-2">
                        <h6 className="mb-0 text-body-highlight">Subtotal</h6>
                        <p className="mb-0 text-body-tertiary">{formatCurrency(subtotal)}</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <h6 className="mb-0 text-body-highlight">Shipping</h6>
                        <p className="mb-0 text-body-tertiary">{formatCurrency(shipping)}</p>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <h6 className="mb-0 text-body-highlight">Tax (18% GST)</h6>
                        <p className="mb-0 text-body-tertiary">{formatCurrency(tax)}</p>
                      </div>
                      {discount > 0 && (
                        <div className="d-flex justify-content-between mb-2">
                          <h6 className="mb-0 text-success">Discount</h6>
                          <p className="mb-0 text-success">-{formatCurrency(discount)}</p>
                        </div>
                      )}
                      <div className="border-top border-translucent pt-3 mt-3">
                        <div className="d-flex justify-content-between">
                          <h5 className="mb-0 text-body-emphasis">Grand Total</h5>
                          <h5 className="mb-0 text-body-emphasis">{formatCurrency(grandTotal)}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-history me-2 text-primary"></span>Order Timeline</h4>
                {timeline.map((step, idx) => (
                  <div key={idx} className={`d-flex ${idx < timeline.length - 1 ? 'mb-4 pb-4 border-bottom border-translucent' : ''}`}>
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-s">
                        <div className={`avatar-name rounded-circle bg-${step.color}-subtle text-${step.color}`}>
                          <span data-feather={step.icon} style={{height: 14, width: 14}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 text-body-highlight">{step.status}</h6>
                        <p className="mb-0 fs-10 text-body-quaternary">{step.date}</p>
                      </div>
                      <p className="mb-0 fs-9 text-body-tertiary mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-xl-4">
            {/* Customer Info */}
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-user me-2 text-primary"></span>Customer</h4>
                <div className="d-flex align-items-center mb-3">
                  {order.customer.avatar ? (
                    <div className="avatar avatar-xl me-3"><img className="rounded-circle" src={order.customer.avatar} alt="" /></div>
                  ) : (
                    <div className="avatar avatar-xl me-3">
                      <div className="avatar-name rounded-circle"><span>{order.customer.name.charAt(0)}</span></div>
                    </div>
                  )}
                  <div>
                    <h5 className="mb-0"><a href="/pet-shop/customer-details">{order.customer.name}</a></h5>
                    <p className="mb-0 text-body-tertiary fs-10">Gold Member</p>
                  </div>
                </div>
                <div className="border-top border-translucent pt-3">
                  <div className="mb-2">
                    <span className="fas fa-envelope me-2 text-body-quaternary"></span>
                    <span className="text-body-tertiary fs-9">priya.sharma@gmail.com</span>
                  </div>
                  <div className="mb-2">
                    <span className="fas fa-phone me-2 text-body-quaternary"></span>
                    <span className="text-body-tertiary fs-9">+91 98765 43210</span>
                  </div>
                  <div>
                    <span className="fas fa-paw me-2 text-body-quaternary"></span>
                    <span className="text-body-tertiary fs-9">Dog Owner — Bruno (Golden Retriever)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-truck me-2 text-primary"></span>Shipping Details</h4>
                <div className="mb-3">
                  <h6 className="mb-1 text-body-highlight">Delivery Type</h6>
                  <p className="mb-0 text-body-tertiary">{order.deliveryType}</p>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1 text-body-highlight">Shipping Address</h6>
                  <p className="mb-0 text-body-tertiary">42 Anna Nagar, Chennai 600040, Tamil Nadu, India</p>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1 text-body-highlight">Tracking Number</h6>
                  <p className="mb-0">
                    <a className="fw-semibold" href="#!">BD987654321</a>
                    <span className="badge badge-phoenix badge-phoenix-info ms-2 fs-10">BlueDart</span>
                  </p>
                </div>
                <div>
                  <h6 className="mb-1 text-body-highlight">Estimated Delivery</h6>
                  <p className="mb-0 text-body-tertiary">May 7, 2025 — May 9, 2025</p>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-credit-card me-2 text-primary"></span>Payment</h4>
                <div className="mb-3">
                  <h6 className="mb-1 text-body-highlight">Payment Method</h6>
                  <p className="mb-0 text-body-tertiary">UPI — PhonePe</p>
                </div>
                <div className="mb-3">
                  <h6 className="mb-1 text-body-highlight">Transaction ID</h6>
                  <p className="mb-0 text-body-tertiary fw-semibold">TXN-2025050512560001</p>
                </div>
                <div>
                  <h6 className="mb-1 text-body-highlight">Payment Status</h6>
                  <span className={`badge badge-phoenix fs-10 ${order.paymentStatus.type}`}>
                    <span className="badge-label">{order.paymentStatus.label}</span>
                    <span className="ms-1" data-feather={order.paymentStatus.icon} style={{height: '12.8px', width: '12.8px'}}></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
