import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { stockOverview } from '../../data/inventoryData';

export default function StockOverview() {
  usePhoenixInit();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const filtered = stockOverview.filter(s => {
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.sku.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !statusFilter || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const summary = {
    total: stockOverview.length,
    lowStock: stockOverview.filter(s => s.status === 'low-stock').length,
    outOfStock: stockOverview.filter(s => s.status === 'out-of-stock').length,
    inStock: stockOverview.filter(s => s.status === 'in-stock').length,
  };

  const statusBadge = (status) => {
    const map = { 'in-stock': 'badge-phoenix-success', 'low-stock': 'badge-phoenix-warning', 'out-of-stock': 'badge-phoenix-danger' };
    return map[status] || 'badge-phoenix-secondary';
  };

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Stock Overview</li></ol></nav>
      <div className="mb-9">
        <h2 className="mb-4">📋 Stock Overview</h2>
        <div className="row g-3 mb-4">
          {[{l:'Total Items',v:summary.total,c:'primary',i:'📦'},{l:'In Stock',v:summary.inStock,c:'success',i:'✅'},{l:'Low Stock',v:summary.lowStock,c:'warning',i:'⚠️'},{l:'Out of Stock',v:summary.outOfStock,c:'danger',i:'❌'}].map((c,i) => (
            <div key={i} className="col-6 col-md-3"><div className="card border border-translucent"><div className="card-body d-flex align-items-center"><span className="fs-5 me-3">{c.i}</span><div><p className="text-body-tertiary mb-0 fs-9">{c.l}</p><h4 className="mb-0">{c.v}</h4></div></div></div></div>
          ))}
        </div>
        <div className="d-flex flex-wrap gap-3 mb-4">
          <div className="search-box"><form className="position-relative"><input className="form-control search-input" type="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} /><span className="fas fa-search search-box-icon"></span></form></div>
          <select className="form-select" style={{width:'auto'}} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="">All Status</option><option value="in-stock">In Stock</option><option value="low-stock">Low Stock</option><option value="out-of-stock">Out of Stock</option>
          </select>
          <div className="ms-auto"><button className="btn btn-phoenix-secondary me-2"><span className="fas fa-upload me-2"></span>Import</button><button className="btn btn-phoenix-secondary"><span className="fas fa-download me-2"></span>Export</button></div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead><tr><th>NAME</th><th>TYPE</th><th>SKU</th><th className="text-center">CURRENT</th><th className="text-center">RESERVED</th><th className="text-center">AVAILABLE</th><th className="text-center">MIN</th><th className="text-center">STATUS</th><th className="text-end pe-0">ACTIONS</th></tr></thead>
              <tbody>{filtered.map(s => (
                <tr key={s.id}><td className="align-middle fw-semibold">{s.name}</td><td className="align-middle"><span className={`badge badge-phoenix-${s.type==='Pet'?'warning':'info'}`}>{s.type}</span></td><td className="align-middle text-body-tertiary">{s.sku}</td>
                  <td className="align-middle text-center">{s.currentStock}</td><td className="align-middle text-center">{s.reserved}</td><td className="align-middle text-center fw-bold">{s.available}</td><td className="align-middle text-center">{s.minStock}</td>
                  <td className="align-middle text-center"><span className={`badge ${statusBadge(s.status)}`}>{s.status.replace('-',' ')}</span></td>
                  <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-phoenix-primary"><span className="fas fa-edit"></span></button></td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
