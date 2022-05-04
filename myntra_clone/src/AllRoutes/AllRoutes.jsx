import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Components/Pages/HomePage'
import { Product } from '../Components/Pages/Product'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<Product/>}/>
        </Routes>
    </div>
  )
}
