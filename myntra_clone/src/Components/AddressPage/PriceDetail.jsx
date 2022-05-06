import React from 'react'
import style from "../../css/cartPage.module.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const PriceDetail = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    let totalMrp = cart.reduce((ac,cv)=> ac + cv.price,0)
    let totalAmount = cart.reduce((ac,cv)=> ac + cv.discountRate,0)
    let discountMrp = totalMrp-totalAmount
  
    const handlePlaceOrder = ()=>{
      navigate("/checkout/address")
    }
    console.log("cart",cart)
  return (
    <div>
        <div className={style.cartRightConatiner}>
            <div className={style.cartRightConatinerTotalProduct}>PRICE DETAIL ({cart.length} Item)</div>
            <div className={style.cartRightConatinerTotalMrp}>Total MRP <span>Rs.{totalMrp}</span></div>
            <div className={style.cartRightConatinerDiscountOnMrp}>Discount on MRP <span>-Rs.{discountMrp}</span></div>
            <div className={style.cartRightConatinerCoupanDiscount}>Coupan Discount <span>Apply Coupan</span></div>
            <div className={style.cartRightConatinerConvFees}>Convenience Fee <span>Know More</span><span>Rs.99</span><span>FREE</span></div>
            <hr className={style.cartRightConatinerHrTag}/>
            <div className={style.cartRightConatinerTotalAmount}>Total Amount <span>Rs.{totalAmount}</span></div>
            <button onClick={handlePlaceOrder} className={style.cartRightConatinerPlaceOrderButton}>Place order</button>
        </div>
    </div>
  )
}
