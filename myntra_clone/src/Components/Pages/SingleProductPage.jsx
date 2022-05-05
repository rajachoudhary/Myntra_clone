import React from 'react'
import { BottomFooter } from '../Landing Page/BottomFooter'
import { Navbar } from '../Landing Page/Navbar'
import { ProductDetail } from '../SingleProductPage/ProductDetail'

export const SingleProductPage = () => {
    
  return (
    <div>
        <Navbar/>
       <ProductDetail/>
       <BottomFooter/>
    </div>
  )
}
