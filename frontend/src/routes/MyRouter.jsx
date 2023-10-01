import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/Layouts/Loader'
import NotFound from '../components/NotFound';
import Home from '../components/Home/Home';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/Admin/Dashboard';

const Login = lazy(() => import('../components/User/Login'));
const Register = lazy(() => import('../components/User/Register'));
const ProductDetails = lazy(() => import('../components/ProductDetails/ProductDetails'));
const Products = lazy(() => import('../components/Products/Products'));
const Cart = lazy(() => import('../components/Cart/Cart'));
const Shipping = lazy(() => import('../components/Cart/Shipping'));
const Account = lazy(() => import('../components/User/Account'));
const MyOrders = lazy(() => import('../components/Order/MyOrders'));
const UpdateAccount = lazy(() => import('../components/User/UpdateProfile'));
const UpdatePassword = lazy(() => import('../components/User/UpdatePassword'));
const Wishlist = lazy(() => import('../components/Wishlist/Wishlist'));
const MainData = lazy(() => import('../components/Admin/MainData'));
const AdminOrders = lazy(() => import('../components/Admin/OrderTable'));
const UpdateOrder = lazy(() => import('../components/Admin/UpdateOrder'));
const AdminProducts = lazy(() => import('../components/Admin/ProductTable'));
const NewProduct = lazy(() => import('../components/Admin/NewProduct'));
const UpdateProduct = lazy(() => import('../components/Admin/UpdateProduct'));
const UserTable = lazy(() => import('../components/Admin/UserTable'));
const UpdateUser = lazy(() => import('../components/Admin/UpdateUser'));
const ReviewsTable = lazy(() => import('../components/Admin/ReviewsTable'));
const OrderConfirm = lazy(() => import('../components/Cart/OrderConfirm'));
const OrderStatus = lazy(() => import('../components/Cart/OrderStatus'));
const OrderSuccess = lazy(() => import('../components/Cart/OrderSuccess'));
const OrderDetails = lazy(() => import('../components/Order/OrderDetails'));
const Payment = lazy(() => import('../components/Cart/Payment'));

const AdminContainer = ({ activeTab, children }) => {
    return <Dashboard activeTab={activeTab}>
        <ProtectedRoute isAdmin={true}>
            {children}
        </ProtectedRoute>
    </Dashboard>
}

const MyRouter = () => {

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='//product/:id' element={<ProductDetails />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:keyword' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                {/* Protected Routes */}
                <Route path='/shipping' element={<ProtectedRoute><Shipping /></ProtectedRoute>} />
                <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
                <Route path='/orders' element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
                <Route path='/order/:id' element={<ProtectedRoute><OrderStatus /></ProtectedRoute>} />
                <Route path='/order_details/:id' element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
                <Route path='/order/confirm' element={<ProtectedRoute><OrderConfirm /></ProtectedRoute>} />
                <Route path='/orders/success' element={<ProtectedRoute><OrderSuccess success={true} /></ProtectedRoute>} />
                <Route path='/orders/failed' element={<ProtectedRoute><OrderSuccess success={false} /></ProtectedRoute>} />
                <Route path='/account/update' element={<ProtectedRoute><UpdateAccount /></ProtectedRoute>} />
                <Route path='/password/update' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
                <Route path='/wishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
                <Route path='/process/payment' element={<ProtectedRoute><Payment /></ProtectedRoute>} />

                {/* Admin Routes */}
                <Route path='/admin/dashboard' element={<AdminContainer activeTab={0}> <MainData /> </AdminContainer>} />
                <Route path='/admin/orders' element={<AdminContainer activeTab={1}> <AdminOrders /> </AdminContainer>} />
                <Route path='/admin/order/:id' element={<AdminContainer activeTab={1}> <UpdateOrder /> </AdminContainer>} />
                <Route path='/admin/products' element={<AdminContainer activeTab={2}> <AdminProducts /> </AdminContainer>} />
                <Route path='/admin/new_product' element={<AdminContainer activeTab={3}> <NewProduct /> </AdminContainer>} />
                <Route path='/admin/product/:id' element={<AdminContainer activeTab={3}> <UpdateProduct /> </AdminContainer>} />
                <Route path='/admin/users' element={<AdminContainer activeTab={4}> <UserTable /> </AdminContainer>} />
                <Route path='/admin/user/:id' element={<AdminContainer activeTab={4}> <UpdateUser /> </AdminContainer>} />
                <Route path='/admin/reviews' element={<AdminContainer activeTab={5}> <ReviewsTable /> </AdminContainer>} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default MyRouter
