import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';

const groups = [
  { id: 1, name: 'Gold', color: 'warning', discount: 15, members: 23, minSpend: 20000, description: 'Premium customers with highest spending' },
  { id: 2, name: 'Silver', color: 'secondary', discount: 10, members: 45, minSpend: 10000, description: 'Regular customers with moderate spending' },
  { id: 3, name: 'Bronze', color: 'info', discount: 5, members: 89, minSpend: 5000, description: 'Entry-level loyalty tier' },
  { id: 4, name: 'Regular', color: 'primary', discount: 0, members: 234, minSpend: 0, description: 'All registered customers' },
];

export default function CustomerGroups() {
  usePhoenixInit();
  useEffect(() => { if (window.feather) window.feather.replace(); });

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/customers">Customers</a></li>
          <li className="breadcrumb-item active">Groups</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">👥 Customer Groups</h2></div>
          <div className="col-auto ms-auto"><button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Group</button></div>
        </div>
        <div className="row g-3">
          {groups.map(g => (
            <div key={g.id} className="col-md-6 col-lg-3">
              <div className="card border border-translucent h-100">
                <div className="card-body text-center">
                  <span className={`badge badge-phoenix-${g.color} fs-8 mb-3 px-3 py-2`}>{g.name}</span>
                  <h3 className="mb-1">{g.members}</h3>
                  <p className="text-body-tertiary fs-9 mb-2">Members</p>
                  <div className="d-flex justify-content-between text-body-tertiary fs-10 mb-1">
                    <span>Discount:</span><span className="fw-semibold">{g.discount}%</span>
                  </div>
                  <div className="d-flex justify-content-between text-body-tertiary fs-10">
                    <span>Min Spend:</span><span className="fw-semibold">₹{g.minSpend.toLocaleString()}</span>
                  </div>
                  <p className="text-body-quaternary fs-10 mt-2 mb-0">{g.description}</p>
                </div>
                <div className="card-footer bg-transparent border-top border-translucent text-center">
                  <button className="btn btn-sm btn-phoenix-primary me-2"><span className="fas fa-edit"></span></button>
                  <button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
