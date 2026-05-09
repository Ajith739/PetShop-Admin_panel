import { useState, useEffect, useMemo } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { refundsData, formatCurrency, getStatusBadgeClass } from './petShopData';

export default function Refund() {
  usePhoenixInit();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());

  useEffect(() => { if (window.feather) window.feather.replace(); });

  const statuses = ['Pending', 'Approved', 'Processing', 'Rejected'];

  const filtered = useMemo(() => {
    return refundsData.filter(r => {
      const matchSearch = !search ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.orderId.toLowerCase().includes(search.toLowerCase()) ||
        r.customer.toLowerCase().includes(search.toLowerCase());
      const matchStatus = !statusFilter || r.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  const statusCounts = {
    all: refundsData.length,
    Pending: refundsData.filter(r => r.status === 'Pending').length,
    Approved: refundsData.filter(r => r.status === 'Approved').length,
    Processing: refundsData.filter(r => r.status === 'Processing').length,
    Rejected: refundsData.filter(r => r.status === 'Rejected').length,
  };

  const totalRefundAmount = refundsData.reduce((sum, r) => sum + r.amount, 0);
  const pendingAmount = refundsData.filter(r => r.status === 'Pending').reduce((sum, r) => sum + r.amount, 0);
  const approvedAmount = refundsData.filter(r => r.status === 'Approved' || r.status === 'Processing').reduce((sum, r) => sum + r.amount, 0);

  const toggleRow = (id) => {
    setSelectedRows(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === filtered.length) setSelectedRows(new Set());
    else setSelectedRows(new Set(filtered.map(r => r.id)));
  };

  const getStatusIcon = (status) => {
    const map = { Pending: 'clock', Approved: 'check', Processing: 'loader', Rejected: 'x' };
    return map[status] || 'help-circle';
  };

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pet-shop/orders">Orders</a></li>
          <li className="breadcrumb-item active">Refund</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Refund Requests</h2>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-m me-3">
                    <div className="avatar-name rounded-circle bg-primary-subtle text-primary">
                      <span className="fas fa-undo fs-9"></span>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 text-body-tertiary fs-10 fw-semibold">Total Requests</p>
                    <h4 className="mb-0 text-body-emphasis">{statusCounts.all}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-m me-3">
                    <div className="avatar-name rounded-circle bg-warning-subtle text-warning">
                      <span className="fas fa-clock fs-9"></span>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 text-body-tertiary fs-10 fw-semibold">Pending Amount</p>
                    <h4 className="mb-0 text-body-emphasis">{formatCurrency(pendingAmount)}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-m me-3">
                    <div className="avatar-name rounded-circle bg-success-subtle text-success">
                      <span className="fas fa-check fs-9"></span>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 text-body-tertiary fs-10 fw-semibold">Approved Amount</p>
                    <h4 className="mb-0 text-body-emphasis">{formatCurrency(approvedAmount)}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-m me-3">
                    <div className="avatar-name rounded-circle bg-info-subtle text-info">
                      <span className="fas fa-rupee-sign fs-9"></span>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 text-body-tertiary fs-10 fw-semibold">Total Refund Value</p>
                    <h4 className="mb-0 text-body-emphasis">{formatCurrency(totalRefundAmount)}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-4">
          <div className="row g-3">
            <div className="col-auto">
              <div className="search-box">
                <form className="position-relative">
                  <input className="form-control search-input search" type="search" placeholder="Search refunds"
                    value={search} onChange={(e) => setSearch(e.target.value)} />
                  <span className="fas fa-search search-box-icon"></span>
                </form>
              </div>
            </div>
            <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
              <div className="btn-group position-static" role="group">
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                    {statusFilter || 'Status'}<span className="fas fa-angle-down ms-2"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setStatusFilter(''); }}>All Statuses</a></li>
                    {statuses.map(s => (
                      <li key={s}><a className="dropdown-item" href="#"
                        onClick={(e) => { e.preventDefault(); setStatusFilter(s); }}>{s} ({statusCounts[s]})</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-link text-body me-4 px-0">
                <span className="fa-solid fa-file-export fs-9 me-2"></span>Export
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
                        checked={selectedRows.size === filtered.length && filtered.length > 0}
                        onChange={toggleAll} />
                    </div>
                  </th>
                  <th className="sort align-middle pe-3" scope="col" style={{width: '10%'}}>REFUND ID</th>
                  <th className="sort align-middle pe-3" scope="col" style={{width: '10%'}}>ORDER</th>
                  <th className="sort align-middle pe-3" scope="col" style={{width: '15%'}}>CUSTOMER</th>
                  <th className="sort align-middle pe-3" scope="col" style={{width: '18%'}}>ITEM</th>
                  <th className="sort align-middle text-end" scope="col" style={{width: '10%'}}>AMOUNT</th>
                  <th className="sort align-middle pe-3" scope="col" style={{width: '18%'}}>REASON</th>
                  <th className="sort align-middle text-center" scope="col" style={{width: '10%'}}>STATUS</th>
                  <th className="sort align-middle text-end pe-0" scope="col" style={{width: '12%'}}>DATE</th>
                </tr>
              </thead>
              <tbody className="list">
                {filtered.map(refund => (
                  <tr key={refund.id} className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input className="form-check-input" type="checkbox"
                          checked={selectedRows.has(refund.id)} onChange={() => toggleRow(refund.id)} />
                      </div>
                    </td>
                    <td className="align-middle white-space-nowrap fw-semibold">
                      <a href="#!">{refund.id}</a>
                    </td>
                    <td className="align-middle white-space-nowrap">
                      <a className="fw-semibold" href="/pet-shop/order-details">{refund.orderId}</a>
                    </td>
                    <td className="align-middle white-space-nowrap text-body-highlight fw-semibold">
                      {refund.customer}
                    </td>
                    <td className="align-middle text-body-tertiary" style={{maxWidth: 200}}>
                      <span className="text-truncate d-inline-block" style={{maxWidth: 180}}>{refund.items}</span>
                    </td>
                    <td className="align-middle text-end fw-bold text-body-emphasis">
                      {formatCurrency(refund.amount)}
                    </td>
                    <td className="align-middle text-body-tertiary fs-10" style={{maxWidth: 200}}>
                      {refund.reason}
                    </td>
                    <td className="align-middle text-center">
                      <span className={`badge badge-phoenix fs-10 ${getStatusBadgeClass(refund.status)}`}>
                        <span className="badge-label">{refund.status}</span>
                        <span className="ms-1" data-feather={getStatusIcon(refund.status)} style={{height: '12.8px', width: '12.8px'}}></span>
                      </span>
                    </td>
                    <td className="align-middle white-space-nowrap text-body-tertiary text-end">
                      {refund.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body">
                Showing {filtered.length} of {refundsData.length} refund requests
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
