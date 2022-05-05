import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CartPage } from '../Components/Pages/CartPage'
import { HomePage } from '../Components/Pages/HomePage'
import { Product } from '../Components/Pages/Product'
import { SingleProductPage } from '../Components/Pages/SingleProductPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/products/:id" element={<SingleProductPage/>}/>
            <Route path="/cartpage" element={<CartPage/>}/>
        </Routes>
    </div>
  )
}
