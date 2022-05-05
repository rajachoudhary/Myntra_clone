import React from 'react'
import { useSelector } from 'react-redux'


export const CartPage = () => {
    
    const cart = useSelector(state => state.cart)
    console.log("cart",cart)
  return (
    <div>
      {
        cart.map((item)=>{
          // console.log(item)
          return(
            <div>
              {/* <img src={data.image} alt="" /> */}
            </div>
          )
        })
      }
    </div>
  )
}
