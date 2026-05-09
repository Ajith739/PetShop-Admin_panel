import { useState, useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';

const brandsData = [
  { id: 1, name: 'Royal Canin', logo: '👑', description: 'Premium pet nutrition since 1968', productCount: 12, status: 'active' },
  { id: 2, name: 'Pedigree', logo: '🐕', description: 'Complete nutrition for dogs', productCount: 8, status: 'active' },
  { id: 3, name: 'Whiskas', logo: '🐱', description: 'Delicious cat food', productCount: 6, status: 'active' },
  { id: 4, name: 'Drools', logo: '🍖', description: 'Indian pet food brand', productCount: 5, status: 'active' },
  { id: 5, name: 'KONG', logo: '🧸', description: 'Durable dog toys', productCount: 4, status: 'active' },
  { id: 6, name: 'Fluval', logo: '🐠', description: 'Aquarium equipment', productCount: 7, status: 'active' },
  { id: 7, name: 'Catit', logo: '🐈', description: 'Cat accessories and toys', productCount: 3, status: 'active' },
  { id: 8, name: 'Wahl', logo: '✂️', description: 'Professional grooming tools', productCount: 2, status: 'active' },
  { id: 9, name: 'Flexi', logo: '🦮', description: 'Retractable leashes', productCount: 3, status: 'active' },
  { id: 10, name: 'Seresto', logo: '💊', description: 'Flea & tick prevention', productCount: 2, status: 'active' },
];

export default function ProductBrands() {
  usePhoenixInit();
  useEffect(() => { if (window.feather) window.feather.replace(); });

  return (
    <>
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="/">Pet Shop</a></li>
          <li className="breadcrumb-item"><a href="/products">Products</a></li>
          <li className="breadcrumb-item active">Brands</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto"><h2 className="mb-0">🏷️ Brands</h2></div>
          <div className="col-auto ms-auto">
            <button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add Brand</button>
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th className="align-middle" style={{width: 50}}></th>
                  <th className="align-middle">BRAND NAME</th>
                  <th className="align-middle">DESCRIPTION</th>
                  <th className="align-middle text-center">PRODUCTS</th>
                  <th className="align-middle text-center">STATUS</th>
                  <th className="text-end align-middle pe-0">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {brandsData.map(b => (
                  <tr key={b.id}>
                    <td className="align-middle text-center fs-5">{b.logo}</td>
                    <td className="align-middle fw-semibold">{b.name}</td>
                    <td className="align-middle text-body-tertiary">{b.description}</td>
                    <td className="align-middle text-center"><span className="badge badge-phoenix-info">{b.productCount}</span></td>
                    <td className="align-middle text-center"><span className="badge badge-phoenix-success">{b.status}</span></td>
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
