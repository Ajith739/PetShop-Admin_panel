import { apiGet, apiPost, apiPut, apiDelete, apiRequest } from '../utils/api';

export const petService = {
  getAll: () => apiGet('/pets'),
  getById: (id) => apiGet(`/pets/${id}`),
  create: (data) => apiPost('/pets', data),
  update: (id, data) => apiPut(`/pets/${id}`, data),
  delete: (id) => apiDelete(`/pets/${id}`),
  bulkDelete: (ids) => apiPost('/pets/bulk-delete', { ids }),
  updateStock: (id, data) => apiRequest(`/pets/${id}/stock`, { method: 'PATCH', body: JSON.stringify(data) }),
};

export const categoryService = {
  getAll: () => apiGet('/categories'),
  create: (data) => apiPost('/categories', data),
  update: (id, data) => apiPut(`/categories/${id}`, data),
  delete: (id) => apiDelete(`/categories/${id}`),
};

export const breedService = {
  getAll: () => apiGet('/breeds'),
  create: (data) => apiPost('/breeds', data),
  update: (id, data) => apiPut(`/breeds/${id}`, data),
  delete: (id) => apiDelete(`/breeds/${id}`),
};

export const productService = {
  getAll: () => apiGet('/products'),
  getById: (id) => apiGet(`/products/${id}`),
  create: (data) => apiPost('/products', data),
  update: (id, data) => apiPut(`/products/${id}`, data),
  delete: (id) => apiDelete(`/products/${id}`),
};

export const orderService = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiGet(`/orders${query ? '?' + query : ''}`);
  },
  getById: (id) => apiGet(`/orders/${id}`),
  create: (data) => apiPost('/orders', data),
  update: (id, data) => apiPut(`/orders/${id}`, data),
  updateStatus: (id, status) => apiRequest(`/orders/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  }),
  delete: (id) => apiDelete(`/orders/${id}`),
};

export const customerService = {
  getAll: () => apiGet('/customers'),
  getById: (id) => apiGet(`/customers/${id}`),
  create: (data) => apiPost('/customers', data),
  update: (id, data) => apiPut(`/customers/${id}`, data),
  delete: (id) => apiDelete(`/customers/${id}`),
};

export const couponService = {
  getAll: () => apiGet('/coupons'),
  getById: (id) => apiGet(`/coupons/${id}`),
  create: (data) => apiPost('/coupons', data),
  update: (id, data) => apiPut(`/coupons/${id}`, data),
  delete: (id) => apiDelete(`/coupons/${id}`),
};

export const dashboardService = {
  getStats: () => apiGet('/dashboard/stats'),
};
