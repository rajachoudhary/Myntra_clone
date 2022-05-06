import React from 'react'
import { useSelector } from 'react-redux'
import { CartNavbar } from './CartNavbar'
import style from "../../css/cartPage.module.css"
import { PriceDetail } from '../AddressPage/PriceDetail'

export const CartPage = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <CartNavbar/>
      {
        cart.map((item)=>{
          return(
            <div key={item.id} className={style.cartContainer}>
              <div className={style.cartLeftContainer}>
                <div>
                  <img src={item.image} alt="image" />
                </div>
                <div className={style.cartImageRightText}>
                  <div className={style.cartImageRightTextBrand}>{item.brand}</div>
                  <div className={style.cartImageRightTextTitle}>{item.title}</div>
                  <div className={style.cartImageRightPriceContainer}>
                    <div>{item.discountRate}</div>
                    <div>{item.price}</div>
                    <div>{item.discount}</div>
                  </div>
                </div>
              </div>
              <PriceDetail/>
            </div>
          )
        })
      }
    </div>
  )
}
