import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Starter from './pages/Starter';
import Members from './pages/Members';
import Notifications from './pages/Notifications';
import Timeline from './pages/Timeline';

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

// E-commerce Admin pages
import AddProduct from './pages/ecommerce/admin/AddProduct';
import Products from './pages/ecommerce/admin/Products';
import Customers from './pages/ecommerce/admin/Customers';
import CustomerDetails from './pages/ecommerce/admin/CustomerDetails';
import Orders from './pages/ecommerce/admin/Orders';
import OrderDetails from './pages/ecommerce/admin/OrderDetails';
import Refund from './pages/ecommerce/admin/Refund';

// E-commerce Landing pages
import Homepage from './pages/ecommerce/landing/Homepage';
import ProductDetails from './pages/ecommerce/landing/ProductDetails';
import ProductsFilter from './pages/ecommerce/landing/ProductsFilter';
import Cart from './pages/ecommerce/landing/Cart';
import Checkout from './pages/ecommerce/landing/Checkout';
import ShippingInfo from './pages/ecommerce/landing/ShippingInfo';
import Profile from './pages/ecommerce/landing/Profile';
import FavouriteStores from './pages/ecommerce/landing/FavouriteStores';
import Wishlist from './pages/ecommerce/landing/Wishlist';
import OrderTracking from './pages/ecommerce/landing/OrderTracking';
import Invoice from './pages/ecommerce/landing/Invoice';

// App pages
import Chat from './pages/apps/Chat';
import Calendar from './pages/apps/Calendar';
import Inbox from './pages/apps/email/Inbox';
import EmailDetail from './pages/apps/email/EmailDetail';
import Compose from './pages/apps/email/Compose';
import SocialProfile from './pages/apps/social/SocialProfile';
import Feed from './pages/apps/social/Feed';
import SocialSettings from './pages/apps/social/SocialSettings';

export default function App() {
  return (
    <Routes>
      {/* Admin Layout Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/starter" element={<Starter />} />
        <Route path="/members" element={<Members />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/timeline" element={<Timeline />} />

        {/* E-commerce Admin */}
        <Route path="/apps/e-commerce/admin/add-product" element={<AddProduct />} />
        <Route path="/apps/e-commerce/admin/products" element={<Products />} />
        <Route path="/apps/e-commerce/admin/customers" element={<Customers />} />
        <Route path="/apps/e-commerce/admin/customer-details" element={<CustomerDetails />} />
        <Route path="/apps/e-commerce/admin/orders" element={<Orders />} />
        <Route path="/apps/e-commerce/admin/order-details" element={<OrderDetails />} />
        <Route path="/apps/e-commerce/admin/refund" element={<Refund />} />

        {/* E-commerce Landing */}
        <Route path="/apps/e-commerce/landing/homepage" element={<Homepage />} />
        <Route path="/apps/e-commerce/landing/product-details" element={<ProductDetails />} />
        <Route path="/apps/e-commerce/landing/products-filter" element={<ProductsFilter />} />
        <Route path="/apps/e-commerce/landing/cart" element={<Cart />} />
        <Route path="/apps/e-commerce/landing/checkout" element={<Checkout />} />
        <Route path="/apps/e-commerce/landing/shipping-info" element={<ShippingInfo />} />
        <Route path="/apps/e-commerce/landing/profile" element={<Profile />} />
        <Route path="/apps/e-commerce/landing/favourite-stores" element={<FavouriteStores />} />
        <Route path="/apps/e-commerce/landing/wishlist" element={<Wishlist />} />
        <Route path="/apps/e-commerce/landing/order-tracking" element={<OrderTracking />} />
        <Route path="/apps/e-commerce/landing/invoice" element={<Invoice />} />

        {/* Apps */}
        <Route path="/apps/chat" element={<Chat />} />
        <Route path="/apps/calendar" element={<Calendar />} />
        <Route path="/apps/email/inbox" element={<Inbox />} />
        <Route path="/apps/email/detail" element={<EmailDetail />} />
        <Route path="/apps/email/compose" element={<Compose />} />
        <Route path="/apps/social/profile" element={<SocialProfile />} />
        <Route path="/apps/social/feed" element={<Feed />} />
        <Route path="/apps/social/settings" element={<SocialSettings />} />
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

      {/* Error pages (no layout) */}
      <Route path="/errors/404" element={<Error404 />} />
      <Route path="/errors/403" element={<Error403 />} />
      <Route path="/errors/500" element={<Error500 />} />

      {/* Catch-all */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
