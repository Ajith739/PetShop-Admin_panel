import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';

export default function AddCustomer() {
  usePhoenixInit();
  useEffect(() => { if (window.feather) window.feather.replace(); });

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/customers">Customers</a></li>
          <li className="breadcrumb-item active">Add Customer</li>
        </ol>
      </nav>
      <div className="mb-9">
        <h2 className="mb-4">👤 Add New Customer</h2>
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">Personal Information</h5></div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6"><label className="form-label">Full Name *</label><input className="form-control" placeholder="John Doe" /></div>
                  <div className="col-md-6"><label className="form-label">Email *</label><input className="form-control" type="email" placeholder="john@example.com" /></div>
                  <div className="col-md-6"><label className="form-label">Phone *</label><input className="form-control" placeholder="+91 98765 43210" /></div>
                  <div className="col-md-6"><label className="form-label">Date of Birth</label><input className="form-control" type="date" /></div>
                  <div className="col-12"><label className="form-label">Avatar</label><input className="form-control" type="file" accept="image/*" /></div>
                </div>
              </div>
            </div>
            <div className="card mb-4 border border-translucent">
              <div className="card-header"><h5 className="mb-0">Address</h5></div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-12"><label className="form-label">Street Address</label><input className="form-control" placeholder="42 Anna Nagar" /></div>
                  <div className="col-md-4"><label className="form-label">City</label><input className="form-control" placeholder="Chennai" /></div>
                  <div className="col-md-4"><label className="form-label">State</label><input className="form-control" placeholder="Tamil Nadu" /></div>
                  <div className="col-md-4"><label className="form-label">PIN Code</label><input className="form-control" placeholder="600040" /></div>
                </div>
              </div>
            </div>
            <div className="card border border-translucent">
              <div className="card-header"><h5 className="mb-0">Admin Notes</h5></div>
              <div className="card-body">
                <textarea className="form-control" rows="3" placeholder="Internal notes about this customer..."></textarea>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card border border-translucent">
              <div className="card-header"><h5 className="mb-0">Account</h5></div>
              <div className="card-body">
                <div className="mb-3"><label className="form-label">Status</label><select className="form-select"><option>Active</option><option>Inactive</option></select></div>
                <div className="mb-3"><label className="form-label">Customer Group</label><select className="form-select"><option>Regular</option><option>Gold</option><option>Silver</option><option>Bronze</option></select></div>
                <div className="form-check mb-3"><input className="form-check-input" type="checkbox" id="send-welcome" defaultChecked /><label className="form-check-label" htmlFor="send-welcome">Send welcome email</label></div>
                <button className="btn btn-primary w-100"><span className="fas fa-save me-2"></span>Save Customer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
