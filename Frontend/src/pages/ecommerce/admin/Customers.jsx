import { useState, useEffect, useMemo, useCallback } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';
import { customerService } from '../../../services/api';

const formatCurrency = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

export default function Customers() {
  usePhoenixInit();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const perPage = 10;

  const fetchCustomers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await customerService.getAll();
      setCustomers(res.data || []);
    } catch (err) {
      console.error('Failed to fetch customers:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchCustomers(); }, [fetchCustomers]);
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const filtered = useMemo(() => {
    return customers.filter(c => {
      const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
      const matchStatus = !statusFilter || c.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [customers, search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  const toggleRow = (id) => {
    setSelectedRows(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };
  const toggleAll = () => {
    setSelectedRows(selectedRows.size === pageData.length ? new Set() : new Set(pageData.map(c => c.id)));
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this customer?')) return;
    try {
      await customerService.delete(id);
      setCustomers(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      alert(err.message || 'Failed to delete');
    }
  };

  if (loading) {
    return <div className="d-flex justify-content-center py-9"><div className="spinner-border text-primary" role="status"></div></div>;
  }

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item active">Customers</li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-2 mb-4">
          <div className="col-auto"><h2 className="mb-0">👥 Customers</h2></div>
        </div>

        {/* Summary Cards */}
        <div className="row g-3 mb-4">
          {[
            { label: 'Total', value: customers.length, icon: '👥', color: 'primary' },
            { label: 'Active', value: customers.filter(c => c.status === 'active').length, icon: '✅', color: 'success' },
            { label: 'Inactive', value: customers.filter(c => c.status === 'inactive').length, icon: '⏸️', color: 'warning' },
          ].map((card, i) => (
            <div key={i} className="col-6 col-md-4">
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

        {/* Search & Filters */}
        <div className="d-flex flex-wrap gap-3 mb-4">
          <div className="search-box">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search customers"
                value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
              <span className="fas fa-search search-box-icon"></span>
            </form>
          </div>
          <select className="form-select" style={{width: 'auto'}} value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1); }}>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="banned">Banned</option>
          </select>
          <div className="ms-auto">
            <a className="btn btn-primary" href="/customers/add">
              <span className="fas fa-plus me-2"></span>Add Customer
            </a>
          </div>
        </div>

        {/* Table */}
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar-overlay mx-n1 px-1">
            <table className="table table-sm fs-9 mb-0">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox"
                        checked={selectedRows.size === pageData.length && pageData.length > 0} onChange={toggleAll} />
                    </div>
                  </th>
                  <th className="sort align-middle pe-5">CUSTOMER</th>
                  <th className="sort align-middle pe-5">EMAIL</th>
                  <th className="sort align-middle">PHONE</th>
                  <th className="sort align-middle text-end">ORDERS</th>
                  <th className="sort align-middle text-end ps-3">TOTAL SPENT</th>
                  <th className="sort align-middle text-center ps-4">STATUS</th>
                  <th className="sort align-middle text-end pe-0">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="list">
                {pageData.map(customer => (
                  <tr key={customer.id} className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input className="form-check-input" type="checkbox"
                          checked={selectedRows.has(customer.id)} onChange={() => toggleRow(customer.id)} />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a className="d-flex align-items-center text-body-emphasis" href={`/customers/${customer.id}`}>
                        <div className="avatar avatar-m">
                          <div className="avatar-name rounded-circle"><span>{customer.name.charAt(0)}</span></div>
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">{customer.name}</p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a className="fw-semibold" href={`mailto:${customer.email}`}>{customer.email}</a>
                    </td>
                    <td className="align-middle white-space-nowrap text-body-tertiary">{customer.phone || '-'}</td>
                    <td className="align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
                      {customer.total_orders || 0}
                    </td>
                    <td className="align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
                      {formatCurrency(customer.total_spent || 0)}
                    </td>
                    <td className="align-middle white-space-nowrap text-center ps-4">
                      <span className={`badge badge-phoenix fs-10 ${customer.status === 'active' ? 'badge-phoenix-success' : customer.status === 'banned' ? 'badge-phoenix-danger' : 'badge-phoenix-secondary'}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0">
                      <div className="btn-reveal-trigger position-static">
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button" data-bs-toggle="dropdown" data-boundary="window" data-bs-reference="parent">
                          <span className="fas fa-ellipsis-h fs-10"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a className="dropdown-item" href={`/customers/${customer.id}`}>View Details</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#" onClick={(e) => { e.preventDefault(); handleDelete(customer.id); }}>Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body">
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
