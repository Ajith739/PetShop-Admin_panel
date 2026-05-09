import { useState, useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { customersData, ordersData, formatCurrency } from './petShopData';

export default function CustomerDetails() {
  usePhoenixInit();
  useEffect(() => { if (window.feather) window.feather.replace(); });

  // Use first customer as default for demo
  const customer = customersData[0];
  const customerOrders = ordersData.filter(o => o.customer.name === customer.name);

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pet-shop/customers">Customers</a></li>
          <li className="breadcrumb-item active">Customer details</li>
        </ol>
      </nav>

      <div className="mb-9">
        {/* Customer Header */}
        <div className="row g-3 mb-4 align-items-center">
          <div className="col-auto">
            {customer.avatar ? (
              <div className="avatar avatar-4xl"><img className="rounded-circle" src={customer.avatar} alt={customer.name} /></div>
            ) : (
              <div className="avatar avatar-4xl">
                <div className="avatar-name rounded-circle" style={{fontSize: '2rem'}}><span>{customer.name.charAt(0)}</span></div>
              </div>
            )}
          </div>
          <div className="col">
            <h2 className="mb-1">{customer.name}</h2>
            <div className="d-flex flex-wrap gap-3 text-body-tertiary">
              <span><span className="fas fa-envelope me-1"></span>{customer.email}</span>
              <span><span className="fas fa-phone me-1"></span>{customer.phone}</span>
              <span><span className="fas fa-map-marker-alt me-1"></span>{customer.city}</span>
            </div>
            <div className="mt-2">
              <span className="badge badge-phoenix badge-phoenix-primary me-2 fs-10">{customer.petOwnerType}</span>
              <span className={`badge badge-phoenix fs-10 ${customer.loyaltyTier === 'Gold' ? 'badge-phoenix-warning' : 'badge-phoenix-secondary'}`}>
                {customer.loyaltyTier} Member
              </span>
            </div>
          </div>
          <div className="col-auto">
            <button className="btn btn-phoenix-secondary me-2"><span className="fas fa-edit me-1"></span>Edit</button>
            <button className="btn btn-phoenix-danger"><span className="fas fa-trash me-1"></span>Delete</button>
          </div>
        </div>

        <div className="row g-3">
          {/* Left Column */}
          <div className="col-12 col-xl-8">
            {/* Contact Information */}
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-id-card me-2 text-primary"></span>Contact Information</h4>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Email Address</h6>
                    <a href={`mailto:${customer.email}`}>{customer.email}</a>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Phone Number</h6>
                    <p className="mb-0 text-body-tertiary">{customer.phone}</p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Address</h6>
                    <p className="mb-0 text-body-tertiary">{customer.address}</p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Member Since</h6>
                    <p className="mb-0 text-body-tertiary">{customer.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pet Profile */}
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-paw me-2 text-primary"></span>Pet Profile</h4>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-body-highlight">Pet Owner Type</h6>
                    <p className="mb-0 text-body-tertiary">{customer.petOwnerType}</p>
                  </div>
                  <div className="col-12">
                    <h6 className="mb-2 text-body-highlight">Pets Owned</h6>
                    <div className="table-responsive">
                      <table className="table table-sm fs-9 mb-0">
                        <thead>
                          <tr>
                            <th className="text-body-highlight">Pet Name</th>
                            <th className="text-body-highlight">Breed / Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customer.petsOwned.map((pet, i) => (
                            <tr key={i}>
                              <td className="text-body-tertiary fw-semibold">{pet.name}</td>
                              <td className="text-body-tertiary">{pet.type}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-shopping-bag me-2 text-primary"></span>Recent Orders</h4>
                {customerOrders.length === 0 ? (
                  <p className="text-body-tertiary mb-0">No orders found for this customer.</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-sm fs-9 mb-0">
                      <thead>
                        <tr>
                          <th>ORDER</th>
                          <th className="text-end">TOTAL</th>
                          <th>PAYMENT</th>
                          <th>FULFILLMENT</th>
                          <th className="text-end">DATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customerOrders.map(order => (
                          <tr key={order.id}>
                            <td><a className="fw-semibold" href="/pet-shop/order-details">{order.id}</a></td>
                            <td className="text-end fw-semibold">{formatCurrency(order.total)}</td>
                            <td>
                              <span className={`badge badge-phoenix fs-10 ${order.paymentStatus.type}`}>
                                <span className="badge-label">{order.paymentStatus.label}</span>
                              </span>
                            </td>
                            <td>
                              <span className={`badge badge-phoenix fs-10 ${order.fulfillmentStatus.type}`}>
                                <span className="badge-label">{order.fulfillmentStatus.label}</span>
                              </span>
                            </td>
                            <td className="text-end text-body-tertiary">{order.date}</td>
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
            {/* Account Summary */}
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-chart-bar me-2 text-primary"></span>Account Summary</h4>
                <div className="d-flex justify-content-between mb-3 border-bottom border-translucent pb-3">
                  <h6 className="mb-0 text-body-highlight">Total Orders</h6>
                  <p className="mb-0 fw-bold">{customer.totalOrders}</p>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom border-translucent pb-3">
                  <h6 className="mb-0 text-body-highlight">Total Spent</h6>
                  <p className="mb-0 fw-bold text-body-emphasis">{formatCurrency(customer.totalSpent)}</p>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom border-translucent pb-3">
                  <h6 className="mb-0 text-body-highlight">Loyalty Tier</h6>
                  <span className={`badge badge-phoenix fs-10 ${customer.loyaltyTier === 'Gold' ? 'badge-phoenix-warning' : 'badge-phoenix-secondary'}`}>
                    {customer.loyaltyTier}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom border-translucent pb-3">
                  <h6 className="mb-0 text-body-highlight">Last Seen</h6>
                  <p className="mb-0 text-body-tertiary">{customer.lastSeen}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0 text-body-highlight">Status</h6>
                  <span className={`badge badge-phoenix fs-10 ${customer.status === 'active' ? 'badge-phoenix-success' : 'badge-phoenix-secondary'}`}>
                    {customer.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4"><span className="fas fa-history me-2 text-primary"></span>Recent Activity</h4>
                <div className="timeline-vertical">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-s">
                        <div className="avatar-name rounded-circle bg-success-subtle text-success"><span className="fas fa-shopping-cart fs-10"></span></div>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 text-body-highlight">Placed Order {customerOrders[0]?.id || '#PS-2453'}</h6>
                      <p className="mb-0 fs-10 text-body-tertiary">2 items — Royal Canin Dog Food, Dentastix</p>
                      <p className="mb-0 fs-10 text-body-quaternary">{customer.lastOrder}</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-s">
                        <div className="avatar-name rounded-circle bg-info-subtle text-info"><span className="fas fa-star fs-10"></span></div>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 text-body-highlight">Reached Gold Loyalty Tier</h6>
                      <p className="mb-0 fs-10 text-body-tertiary">Unlocked 10% discount on all orders</p>
                      <p className="mb-0 fs-10 text-body-quaternary">Apr 20, 3:15 PM</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-s">
                        <div className="avatar-name rounded-circle bg-primary-subtle text-primary"><span className="fas fa-paw fs-10"></span></div>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 text-body-highlight">Updated Pet Profile</h6>
                      <p className="mb-0 fs-10 text-body-tertiary">Added Bruno (Golden Retriever)</p>
                      <p className="mb-0 fs-10 text-body-quaternary">Mar 15, 11:00 AM</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-s">
                        <div className="avatar-name rounded-circle bg-warning-subtle text-warning"><span className="fas fa-user-plus fs-10"></span></div>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 text-body-highlight">Account Created</h6>
                      <p className="mb-0 fs-10 text-body-tertiary">Registered as a new customer</p>
                      <p className="mb-0 fs-10 text-body-quaternary">{customer.joinDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
