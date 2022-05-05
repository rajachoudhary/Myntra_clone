import React from 'react'
import { BottomFooter } from '../Landing Page/BottomFooter'
import { Navbar } from '../Landing Page/Navbar'
import { ProductData } from '../ProductPage/ProductData'
import { ProductLeftBar } from '../ProductPage/ProductLeftBar'
import { ProductTopNavbar } from '../ProductPage/ProductTopNavbar'

export const Product = () => {
 
  return (
    <div>
      <Navbar/>
      <ProductTopNavbar/>
      <div style={{display:"flex"}}>
      <ProductLeftBar/>
      <ProductData/>
      </div>
      <BottomFooter/>
      
    </div>
  )
}

