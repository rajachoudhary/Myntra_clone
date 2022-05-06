import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Address } from '../Components/Pages/Address'
import { CartPage } from '../Components/Pages/CartPage'
import { HomePage } from '../Components/Pages/HomePage'
import { Payment } from '../Components/Pages/Payment'
import { Product } from '../Components/Pages/Product'
import { SingleProductPage } from '../Components/Pages/SingleProductPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/products/:id" element={<SingleProductPage/>}/>
            <Route path="/checkout/cart" element={<CartPage/>}/>
            <Route path="/checkout/address" element={<Address/>}/>
            <Route path="/checkout/payment" element={<Payment/>}/>
        </Routes>
    </div>
  )
}
