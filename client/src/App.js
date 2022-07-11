import './App.css';
import './App.scss';
import Stack from '@mui/material/Stack';
import Account from 'features/Account/pages/Account';
import BasicTabs from 'features/Account/pages/BasicTabs';
import InforOder from 'features/Account/pages/InforOrder';
import Login from 'features/Auth/pages/Login';
// import Register from 'features/Auth/pages/Register';
import CartFeature from 'features/Cart';
import Home from 'features/Home/pages/Home';
// import NotFound from 'features/Home/pages/NotFound';
import DetailPage from 'features/Product/pages/DetailPage';
import ListPage from 'features/Product/pages/ListPage';
import SearchPage from 'features/Search/page/SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'router/privteRouter';
import Checkout from 'features/Checkout/page/Checkout';
import OrderSuccess from 'features/Checkout/page/orderSuccess';
import React, { Suspense } from 'react';
import LoadingScreen from 'components/common/LoadingScreen';
import AuthContextProvider from 'features/Admin/contexts/AuthContext';
import PartnerContextProvider from 'features/Admin/contexts/PartnerContext';
import Register from 'features/Admin/components/Common/Register';
import ShipperRegister from 'features/Admin/components/User/ShipperRegister';
import SellerRegister from 'features/Admin/components/User/SellerRegister';
import GroceryRegister from 'features/Admin/components/User/GroceryRegister';
import Admin from 'features/Admin/pages/Admin';
import UserNavbar from 'features/Admin/components/User/UserNavbar';
// Lazy load - Code splitting
const AddressDelivery = React.lazy(() => import('features/Account/pages/AddressDelivery'));
const SettingAccount = React.lazy(() => import('features/Account/pages/SettingAccount'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AuthContextProvider>
        <PartnerContextProvider>
          <BrowserRouter>
            <Stack minHeight="100vh">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/product/:productId" element={<DetailPage />} />

                <Route path="collection">
                  <Route path="all" element={<ListPage />} />
                  <Route path=":categoryId" element={<ListPage />} />
                  <Route index element={<ListPage />} />
                </Route>

                <Route path="/cart" element={<CartFeature />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/checkout" element={<PrivateRoute />}>
                  <Route index element={<Checkout />} />
                  <Route path=":slug" element={<OrderSuccess />} />
                </Route>

                <Route path="/account" element={<PrivateRoute />}>
                  <Route index element={<Account />} />
                  <Route path="order">
                    <Route index element={<BasicTabs />} />
                    <Route path=":orderId" element={<InforOder />} />
                  </Route>
                  <Route path="address" element={<AddressDelivery />} />
                  <Route path="inforuser" element={<SettingAccount />} />
                </Route>

                <Route path="/search" element={<SearchPage />} />

                <Route path="/register" element={Register} />
                <Route path="/shipper-register" element={<ShipperRegister />} />
                <Route path="/seller-register" element={<SellerRegister />} />
                <Route path="/grocery-register" element={<GroceryRegister />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/" element={<UserNavbar />} />

                <Route path="*" element={<Admin />} />
              </Routes>
            </Stack>
          </BrowserRouter>
        </PartnerContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
