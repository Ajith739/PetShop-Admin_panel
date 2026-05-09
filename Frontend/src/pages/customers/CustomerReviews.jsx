import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';

const reviews = [
  { id: 1, customer: 'Priya Sharma', product: 'Royal Canin Medium Adult 15kg', type: 'Product', rating: 5, text: 'My dog Bruno absolutely loves this food! Great quality.', date: 'May 5, 2026', status: 'Approved' },
  { id: 2, customer: 'Rahul Patel', product: 'Whiskers (Persian Cat)', type: 'Pet', rating: 5, text: 'The kitten was healthy and well-cared for. Amazing service!', date: 'May 3, 2026', status: 'Approved' },
  { id: 3, customer: 'Ananya Krishnan', product: 'KONG Classic Large', type: 'Product', rating: 4, text: 'Good toy but a bit expensive. My dogs still love it.', date: 'May 1, 2026', status: 'Approved' },
  { id: 4, customer: 'Vikram Singh', product: 'Fluval FX6 Filter', type: 'Product', rating: 5, text: 'Best aquarium filter I\'ve ever used. Silent and powerful.', date: 'Apr 28, 2026', status: 'Approved' },
  { id: 5, customer: 'Meera Iyer', product: 'Wahl Grooming Kit', type: 'Product', rating: 3, text: 'Decent quality but the blade got dull quickly.', date: 'Apr 25, 2026', status: 'Pending' },
  { id: 6, customer: 'Arjun Nair', product: 'Polly (Indian Ringneck)', type: 'Pet', rating: 5, text: 'Polly is a wonderful bird! Already talking and very friendly.', date: 'Apr 20, 2026', status: 'Approved' },
  { id: 7, customer: 'Karthik Rajan', product: 'Drools Performance 20kg', type: 'Product', rating: 2, text: 'My dog didn\'t like the taste. Had to return it.', date: 'Apr 15, 2026', status: 'Pending' },
];

export default function CustomerReviews() {
  usePhoenixInit();
  const [statusFilter, setStatusFilter] = useState('');
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const filtered = statusFilter ? reviews.filter(r => r.status === statusFilter) : reviews;

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/customers">Customers</a></li>
          <li className="breadcrumb-item active">Reviews</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">⭐ Customer Reviews</h2></div>
        </div>
        <div className="d-flex gap-2 mb-4">
          <button className={`btn ${!statusFilter ? 'btn-primary' : 'btn-phoenix-secondary'}`} onClick={() => setStatusFilter('')}>All ({reviews.length})</button>
          <button className={`btn ${statusFilter === 'Approved' ? 'btn-primary' : 'btn-phoenix-secondary'}`} onClick={() => setStatusFilter('Approved')}>Approved ({reviews.filter(r => r.status === 'Approved').length})</button>
          <button className={`btn ${statusFilter === 'Pending' ? 'btn-primary' : 'btn-phoenix-secondary'}`} onClick={() => setStatusFilter('Pending')}>Pending ({reviews.filter(r => r.status === 'Pending').length})</button>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead><tr>
                <th className="align-middle">CUSTOMER</th>
                <th className="align-middle">PRODUCT/PET</th>
                <th className="align-middle">TYPE</th>
                <th className="align-middle text-center">RATING</th>
                <th className="align-middle" style={{minWidth: 200}}>REVIEW</th>
                <th className="align-middle">DATE</th>
                <th className="align-middle text-center">STATUS</th>
                <th className="text-end align-middle pe-0">ACTIONS</th>
              </tr></thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r.id}>
                    <td className="align-middle fw-semibold">{r.customer}</td>
                    <td className="align-middle text-body-tertiary">{r.product}</td>
                    <td className="align-middle"><span className={`badge badge-phoenix-${r.type === 'Pet' ? 'warning' : 'info'}`}>{r.type}</span></td>
                    <td className="align-middle text-center">{'⭐'.repeat(r.rating)}</td>
                    <td className="align-middle text-body-tertiary" style={{maxWidth: 300}}><span className="line-clamp-2">{r.text}</span></td>
                    <td className="align-middle text-body-tertiary">{r.date}</td>
                    <td className="align-middle text-center"><span className={`badge ${r.status === 'Approved' ? 'badge-phoenix-success' : 'badge-phoenix-warning'}`}>{r.status}</span></td>
                    <td className="align-middle text-end pe-0">
                      {r.status === 'Pending' && <button className="btn btn-sm btn-phoenix-success me-1"><span className="fas fa-check"></span></button>}
                      <button className="btn btn-sm btn-phoenix-danger"><span className="fas fa-trash"></span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
