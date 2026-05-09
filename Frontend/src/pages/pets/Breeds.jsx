import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';
import { petBreeds, petCategories } from '../../data/petsData';

export default function Breeds() {
  usePhoenixInit();
  const [categoryFilter, setCategoryFilter] = useState('');
  useEffect(() => { if (window.feather) window.feather.replace(); });

  const breedsList = [];
  let id = 0;
  Object.entries(petBreeds).forEach(([cat, breeds]) => {
    breeds.forEach(breed => {
      id++;
      breedsList.push({ id, name: breed, category: cat, origin: 'Various', sizeRange: 'Varies', temperament: 'Friendly', lifeSpan: '8-15 years' });
    });
  });

  const filtered = categoryFilter ? breedsList.filter(b => b.category === categoryFilter) : breedsList;

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/pets">Pets</a></li>
          <li className="breadcrumb-item active">Breeds</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">🧬 Breeds</h2></div>
          <div className="col-auto ms-auto">
            <button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Breed</button>
          </div>
        </div>
        <div className="mb-3">
          <div className="btn-group" role="group">
            <button className={`btn ${!categoryFilter ? 'btn-primary' : 'btn-phoenix-secondary'}`} onClick={() => setCategoryFilter('')}>All ({breedsList.length})</button>
            {petCategories.map(c => (
              <button key={c.id} className={`btn ${categoryFilter === c.name ? 'btn-primary' : 'btn-phoenix-secondary'}`}
                onClick={() => setCategoryFilter(c.name)}>{c.icon} {c.name}</button>
            ))}
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th className="align-middle ps-0">#</th>
                  <th className="align-middle">BREED NAME</th>
                  <th className="align-middle">CATEGORY</th>
                  <th className="align-middle">ORIGIN</th>
                  <th className="align-middle">SIZE RANGE</th>
                  <th className="align-middle">TEMPERAMENT</th>
                  <th className="align-middle">LIFE SPAN</th>
                  <th className="text-end align-middle pe-0">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="list">
                {filtered.map(breed => (
                  <tr key={breed.id}>
                    <td className="align-middle">{breed.id}</td>
                    <td className="align-middle fw-semibold">{breed.name}</td>
                    <td className="align-middle text-body-tertiary">{breed.category}</td>
                    <td className="align-middle text-body-tertiary">{breed.origin}</td>
                    <td className="align-middle text-body-tertiary">{breed.sizeRange}</td>
                    <td className="align-middle text-body-tertiary">{breed.temperament}</td>
                    <td className="align-middle text-body-tertiary">{breed.lifeSpan}</td>
                    <td className="align-middle text-end pe-0">
                      <button className="btn btn-sm btn-phoenix-primary me-1"><span className="fas fa-edit"></span></button>
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
