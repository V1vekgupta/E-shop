import React, { useState } from 'react'
import './App.css'
import Products from './components/products/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'
import LogIn from './components/auth/LogIn'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'
import Checkout from './components/checkout/Checkout'
import PaymentConfirmation from './components/checkout/PaymentConfirmation'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './components/admin/dashboard/Dashboard'
import AdminProducts from './components/admin/products/AdminProducts'
import Sellers from './components/admin/sellers/Sellers'
import Category from './components/admin/categories/Category'
import Orders from './components/admin/orders/Orders'
import SellerLayout from './components/seller/SellerLayout'
import SellerDashboard from './components/seller/dashboard/SellerDashboard'
import SellerOrders from './components/admin/orders/Orders'
import SellerProducts from './components/admin/products/AdminProducts'
import ProfileLayout from './components/profile/ProfileLayout'
import ProfileHome from './components/profile/ProfileHome'
import ProfileOrders from './components/profile/ProfileOrders'
 import Footer from './components/shared/Footer'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/products' element={ <Products />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/cart' element={ <Cart />}/>
        
          <Route path='/' element={<PrivateRoute customerOnly />}>
            <Route path='/checkout' element={ <Checkout />}/>
            <Route path='/order-confirm' element={ <PaymentConfirmation />}/>
          </Route>

          <Route path='/' element={<PrivateRoute publicPage />}>
            <Route path='/login' element={ <LogIn />}/>
            <Route path='/register' element={ <Register />}/>
          </Route>

          <Route path='/' element={<PrivateRoute customerOnly />}>
            <Route path='/profile' element={<ProfileLayout />}>
              <Route path='' element={<ProfileHome />} />
              <Route path='orders' element={<ProfileOrders />} />
            </Route>
          </Route>

           <Route path='/' element={<PrivateRoute adminOnly />}>
            <Route path='/admin' element={ <AdminLayout />}>
              <Route path='' element={<Dashboard />} />
              <Route path='products' element={<AdminProducts />} />
              <Route path='sellers' element={<Sellers />} />
              <Route path='orders' element={<Orders />} />
              <Route path='categories' element={<Category />} />
            </Route>
          </Route>

          <Route path='/' element={<PrivateRoute sellerOnly />}>
            <Route path='/seller' element={<SellerLayout />}>
              <Route path='' element={<SellerDashboard />} />
              <Route path='products' element={<SellerProducts />} />
              <Route path='orders' element={<SellerOrders />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
      <Toaster position='bottom-center'/>
    </React.Fragment>
  )
}

export default App
