import { useState, useEffect, useMemo, useCallback } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { petService, productService } from '../../services/api';

const formatCurrency = (amount) => '₹' + Number(amount).toLocaleString('en-IN');

export default function StockOverview() {
  usePhoenixInit();
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => { if (window.feather) window.feather.replace(); });

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [pRes, prRes] = await Promise.all([petService.getAll(), productService.getAll()]);
      setPets((pRes.data || []).map(p => ({ ...p, itemType: 'Pet' })));
      setProducts((prRes.data || []).map(p => ({ ...p, itemType: 'Product' })));
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const allItems = useMemo(() => [...pets, ...products], [pets, products]);

  const filtered = useMemo(() => {
    return allItems.filter(item => {
      const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || (item.sku || '').toLowerCase().includes(search.toLowerCase());
      const status = item.stock_quantity > (item.minimum_stock_alert || 5) ? 'In Stock' : item.stock_quantity > 0 ? 'Low Stock' : 'Out of Stock';
      const matchStatus = !statusFilter || status === statusFilter;
      const matchType = !typeFilter || item.itemType === typeFilter;
      return matchSearch && matchStatus && matchType;
    });
  }, [allItems, search, statusFilter, typeFilter]);

  const stockStats = useMemo(() => ({
    total: allItems.length,
    inStock: allItems.filter(i => i.stock_quantity > (i.minimum_stock_alert || 5)).length,
    lowStock: allItems.filter(i => i.stock_quantity > 0 && i.stock_quantity <= (i.minimum_stock_alert || 5)).length,
    outOfStock: allItems.filter(i => i.stock_quantity === 0).length,
    totalValue: allItems.reduce((sum, i) => sum + (i.price * i.stock_quantity), 0),
  }), [allItems]);

  if (loading) return <div className="d-flex justify-content-center py-9"><div className="spinner-border text-primary" role="status"></div></div>;

  return (<>
    <nav className="mb-3" aria-label="breadcrumb"><ol className="breadcrumb mb-0"><li className="breadcrumb-item"><a href="/">Pet Shop</a></li><li className="breadcrumb-item active">Stock Overview</li></ol></nav>
    <div className="mb-9">
      <h2 className="mb-4">📊 Stock Overview</h2>

      <div className="row g-3 mb-4">
        {[
          { label: 'Total Items', value: stockStats.total, icon: '📦', color: 'primary' },
          { label: 'In Stock', value: stockStats.inStock, icon: '✅', color: 'success' },
          { label: 'Low Stock', value: stockStats.lowStock, icon: '⚠️', color: 'warning' },
          { label: 'Out of Stock', value: stockStats.outOfStock, icon: '❌', color: 'danger' },
        ].map((c, i) => (
          <div key={i} className="col-6 col-md-3">
            <div className="card border border-translucent"><div className="card-body d-flex align-items-center">
              <span className="fs-5 me-3">{c.icon}</span>
              <div><p className="text-body-tertiary mb-0 fs-9">{c.label}</p><h4 className="mb-0">{c.value}</h4></div>
            </div></div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="search-box"><form className="position-relative"><input className="form-control search-input" type="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} /><span className="fas fa-search search-box-icon"></span></form></div>
        <select className="form-select" style={{width: 'auto'}} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}><option value="">All Status</option><option>In Stock</option><option>Low Stock</option><option>Out of Stock</option></select>
        <select className="form-select" style={{width: 'auto'}} value={typeFilter} onChange={e => setTypeFilter(e.target.value)}><option value="">All Types</option><option>Pet</option><option>Product</option></select>
      </div>

      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent"><div className="table-responsive scrollbar mx-n1 px-1"><table className="table fs-9 mb-0">
        <thead><tr><th>NAME</th><th>SKU</th><th>TYPE</th><th className="text-end">PRICE</th><th className="text-center">STOCK</th><th className="text-center">ALERT</th><th className="text-center">STATUS</th><th className="text-end">STOCK VALUE</th></tr></thead>
        <tbody>{filtered.map((item, i) => {
          const status = item.stock_quantity > (item.minimum_stock_alert || 5) ? 'In Stock' : item.stock_quantity > 0 ? 'Low Stock' : 'Out of Stock';
          const badge = status === 'In Stock' ? 'badge-phoenix-success' : status === 'Low Stock' ? 'badge-phoenix-warning' : 'badge-phoenix-danger';
          return (<tr key={`${item.itemType}-${item.id}`}>
            <td className="align-middle fw-semibold">{item.name}</td>
            <td className="align-middle text-body-tertiary font-monospace fs-10">{item.sku}</td>
            <td className="align-middle"><span className={`badge ${item.itemType === 'Pet' ? 'badge-phoenix-primary' : 'badge-phoenix-info'}`}>{item.itemType}</span></td>
            <td className="align-middle text-end">{formatCurrency(item.sale_price || item.price)}</td>
            <td className="align-middle text-center fw-bold">{item.stock_quantity}</td>
            <td className="align-middle text-center text-body-tertiary">{item.minimum_stock_alert || 5}</td>
            <td className="align-middle text-center"><span className={`badge ${badge}`}>{status}</span></td>
            <td className="align-middle text-end fw-semibold">{formatCurrency(item.price * item.stock_quantity)}</td>
          </tr>);
        })}</tbody>
      </table></div></div>
    </div>
  </>);
}
