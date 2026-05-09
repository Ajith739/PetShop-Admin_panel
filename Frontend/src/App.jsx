import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Dashboard (unchanged)
import Dashboard from './pages/Dashboard';

// Auth pages
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import SignOut from './pages/auth/SignOut';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import LockScreen from './pages/auth/LockScreen';
import TwoFA from './pages/auth/TwoFA';

// Error pages
import Error404 from './pages/errors/Error404';
import Error403 from './pages/errors/Error403';
import Error500 from './pages/errors/Error500';

// Pet Management
import AllPets from './pages/pets/AllPets';
import AddEditPet from './pages/pets/AddEditPet';
import PetCategories from './pages/pets/Categories';
import PetBreeds from './pages/pets/Breeds';
import HealthRecords from './pages/pets/HealthRecords';

// Product Management (existing + new)
import Products from './pages/ecommerce/admin/Products';
import AddProduct from './pages/ecommerce/admin/AddProduct';
import ProductCategories from './pages/products/ProductCategories';
import ProductBrands from './pages/products/ProductBrands';
import Attributes from './pages/products/Attributes';

// Order Management
import AllOrders from './pages/orders/AllOrders';
import PendingOrders from './pages/orders/PendingOrders';
import ProcessingOrders from './pages/orders/ProcessingOrders';
import ShippedOrders from './pages/orders/ShippedOrders';
import DeliveredOrders from './pages/orders/DeliveredOrders';
import CancelledOrders from './pages/orders/CancelledOrders';
import EnhancedOrderDetails from './pages/orders/EnhancedOrderDetails';

// Customer Management
import Customers from './pages/ecommerce/admin/Customers';
import CustomerDetails from './pages/ecommerce/admin/CustomerDetails';
import AddCustomer from './pages/customers/AddCustomer';
import CustomerGroups from './pages/customers/CustomerGroups';
import CustomerReviews from './pages/customers/CustomerReviews';

// Inventory
import StockOverview from './pages/inventory/StockOverview';
import StockAlerts from './pages/inventory/StockAlerts';
import StockHistory from './pages/inventory/StockHistory';
import Suppliers from './pages/inventory/Suppliers';
import PurchaseOrders from './pages/inventory/PurchaseOrders';

// Reports
import SalesReport from './pages/reports/SalesReport';
import ProductReport from './pages/reports/ProductReport';
import CustomerReport from './pages/reports/CustomerReport';
import InventoryReport from './pages/reports/InventoryReport';
import TaxReport from './pages/reports/TaxReport';

// Marketing
import Coupons from './pages/marketing/Coupons';
import EmailCampaigns from './pages/marketing/EmailCampaigns';
import Banners from './pages/marketing/Banners';
import PushNotifications from './pages/marketing/PushNotifications';

// Content
import ContentPages from './pages/content/ContentPages';
import BlogPosts from './pages/content/BlogPosts';
import PetCareGuides from './pages/content/PetCareGuides';
import FAQs from './pages/content/FAQs';
import Testimonials from './pages/content/Testimonials';

// Settings
import GeneralSettings from './pages/settings/GeneralSettings';
import PaymentGateways from './pages/settings/PaymentGateways';
import ShippingMethods from './pages/settings/ShippingMethods';
import TaxSettings from './pages/settings/TaxSettings';
import EmailTemplates from './pages/settings/EmailTemplates';
import NotificationSettings from './pages/settings/NotificationSettings';
import RolesPermissions from './pages/settings/RolesPermissions';
import SystemLogs from './pages/settings/SystemLogs';

// Legacy pages kept for backward compat
import Refund from './pages/ecommerce/admin/Refund';

export default function App() {
  return (
    <Routes>
      {/* Admin Layout Routes — Protected */}
      <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route path="/" element={<Dashboard />} />

        {/* ── Pet Management ── */}
        <Route path="/pets" element={<AllPets />} />
        <Route path="/pets/add" element={<AddEditPet />} />
        <Route path="/pets/edit/:id" element={<AddEditPet />} />
        <Route path="/pets/categories" element={<PetCategories />} />
        <Route path="/pets/breeds" element={<PetBreeds />} />
        <Route path="/pets/health-records" element={<HealthRecords />} />

        {/* ── Product Management ── */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/categories" element={<ProductCategories />} />
        <Route path="/products/brands" element={<ProductBrands />} />
        <Route path="/products/attributes" element={<Attributes />} />
        {/* Legacy paths */}
        <Route path="/pet-shop/products" element={<Products />} />
        <Route path="/pet-shop/add-product" element={<AddProduct />} />

        {/* ── Order Management ── */}
        <Route path="/orders" element={<AllOrders />} />
        <Route path="/orders/pending" element={<PendingOrders />} />
        <Route path="/orders/processing" element={<ProcessingOrders />} />
        <Route path="/orders/shipped" element={<ShippedOrders />} />
        <Route path="/orders/delivered" element={<DeliveredOrders />} />
        <Route path="/orders/cancelled" element={<CancelledOrders />} />
        <Route path="/orders/:id" element={<EnhancedOrderDetails />} />
        <Route path="/orders/refund" element={<Refund />} />
        {/* Legacy */}
        <Route path="/pet-shop/orders" element={<AllOrders />} />
        <Route path="/pet-shop/order-details" element={<EnhancedOrderDetails />} />
        <Route path="/pet-shop/refund" element={<Refund />} />

        {/* ── Customer Management ── */}
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/customers/groups" element={<CustomerGroups />} />
        <Route path="/customers/reviews" element={<CustomerReviews />} />
        {/* Legacy */}
        <Route path="/pet-shop/customers" element={<Customers />} />
        <Route path="/pet-shop/customer-details" element={<CustomerDetails />} />

        {/* ── Inventory ── */}
        <Route path="/inventory" element={<StockOverview />} />
        <Route path="/inventory/alerts" element={<StockAlerts />} />
        <Route path="/inventory/history" element={<StockHistory />} />
        <Route path="/inventory/suppliers" element={<Suppliers />} />
        <Route path="/inventory/purchase-orders" element={<PurchaseOrders />} />

        {/* ── Reports ── */}
        <Route path="/reports/sales" element={<SalesReport />} />
        <Route path="/reports/products" element={<ProductReport />} />
        <Route path="/reports/customers" element={<CustomerReport />} />
        <Route path="/reports/inventory" element={<InventoryReport />} />
        <Route path="/reports/tax" element={<TaxReport />} />

        {/* ── Marketing ── */}
        <Route path="/marketing/coupons" element={<Coupons />} />
        <Route path="/marketing/campaigns" element={<EmailCampaigns />} />
        <Route path="/marketing/banners" element={<Banners />} />
        <Route path="/marketing/notifications" element={<PushNotifications />} />

        {/* ── Content ── */}
        <Route path="/content/pages" element={<ContentPages />} />
        <Route path="/content/blog" element={<BlogPosts />} />
        <Route path="/content/pet-care" element={<PetCareGuides />} />
        <Route path="/content/faqs" element={<FAQs />} />
        <Route path="/content/testimonials" element={<Testimonials />} />

        {/* ── Settings ── */}
        <Route path="/settings" element={<GeneralSettings />} />
        <Route path="/settings/general" element={<GeneralSettings />} />
        <Route path="/settings/payments" element={<PaymentGateways />} />
        <Route path="/settings/shipping" element={<ShippingMethods />} />
        <Route path="/settings/tax" element={<TaxSettings />} />
        <Route path="/settings/email-templates" element={<EmailTemplates />} />
        <Route path="/settings/notifications" element={<NotificationSettings />} />
        <Route path="/settings/roles" element={<RolesPermissions />} />
        <Route path="/settings/logs" element={<SystemLogs />} />
      </Route>

      {/* Auth Layout Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-out" element={<SignOut />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/auth/lock-screen" element={<LockScreen />} />
        <Route path="/auth/2fa" element={<TwoFA />} />
      </Route>

      {/* Error pages */}
      <Route path="/errors/404" element={<Error404 />} />
      <Route path="/errors/403" element={<Error403 />} />
      <Route path="/errors/500" element={<Error500 />} />

      {/* Catch-all */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
