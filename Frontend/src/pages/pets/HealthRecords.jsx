import { useState, useEffect, useMemo } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { healthRecords, petCategories } from '../../data/petsData';

export default function HealthRecords() {
  usePhoenixInit();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const filtered = useMemo(() => healthRecords.filter(r => {
    const matchSearch = !search || r.petName.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !categoryFilter || r.petCategory === categoryFilter;
    const matchType = !typeFilter || r.recordType === typeFilter;
    return matchSearch && matchCategory && matchType;
  }), [search, categoryFilter, typeFilter]);

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pets">Pets</a></li>
          <li className="breadcrumb-item active">Health Records</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">🏥 Pet Health Records</h2></div>
        </div>
        <div className="d-flex flex-wrap gap-3 mb-4">
          <div className="search-box">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search records..." value={search} onChange={(e) => setSearch(e.target.value)} />
              <span className="fas fa-search search-box-icon"></span>
            </form>
          </div>
          <select className="form-select" style={{width: 'auto'}} value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            {petCategories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
          </select>
          <select className="form-select" style={{width: 'auto'}} value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
            <option value="">All Types</option>
            <option>Vaccination</option><option>Health Check</option><option>Deworming</option>
          </select>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th className="align-middle">PET NAME</th>
                  <th className="align-middle">CATEGORY</th>
                  <th className="align-middle">RECORD TYPE</th>
                  <th className="align-middle">DESCRIPTION</th>
                  <th className="align-middle">DATE</th>
                  <th className="align-middle">VET</th>
                  <th className="align-middle">STATUS</th>
                  <th className="align-middle">NEXT DUE</th>
                  <th className="align-middle text-center">DOCS</th>
                </tr>
              </thead>
              <tbody className="list">
                {filtered.map(r => (
                  <tr key={r.id}>
                    <td className="align-middle fw-semibold">{r.petName}</td>
                    <td className="align-middle text-body-tertiary">{r.petCategory}</td>
                    <td className="align-middle"><span className="badge badge-phoenix-info">{r.recordType}</span></td>
                    <td className="align-middle text-body-tertiary">{r.description}</td>
                    <td className="align-middle text-body-tertiary">{r.date}</td>
                    <td className="align-middle text-body-tertiary">{r.vet}</td>
                    <td className="align-middle">
                      <span className={`badge ${r.status === 'Complete' ? 'badge-phoenix-success' : 'badge-phoenix-warning'}`}>{r.status}</span>
                    </td>
                    <td className="align-middle text-body-tertiary">{r.nextDue || '—'}</td>
                    <td className="align-middle text-center">{r.documents ? <span className="fas fa-file-medical text-success"></span> : '—'}</td>
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
