import React from 'react'
import style from "../../css/addressDetail.module.css"
import styles from "../../css/cartPage.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAddress, removeAddress } from '../../Redux/action'


export const AddressDetail = () => {
    const address = useSelector(state => state.address)
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    let totalMrp = cart.reduce((ac,cv)=> ac + cv.price,0)
    let totalAmount = cart.reduce((ac,cv)=> ac + cv.discountRate,0)
    let discountMrp = totalMrp-totalAmount
    const dispatch = useDispatch()
  
    const handlePayment = ()=>{
      navigate("/checkout/payment")
    }
    const handleRemove = (id) => {
      console.log("raja",id)
        fetch(`https://my-myntra-clone-api.herokuapp.com/address/${id}`,{
          method:"DELETE"
        })
        dispatch(fetchAddress())
        // window.location.reload(true)

    }
  // console.log("address",address)
  return (
      <div className={style.addressDetailMainContianer}>
        <div className={style.addressDetailSubContianer}>
          <div className={style.addressDetailNewAddressContianer}>
            <div>Select Delivery Address</div>
            <button>ADD NEW ADDRESS</button>
          </div>
          <div className={style.addressDetailDefaultAddressText}>DEFAULT ADDRESS</div>
          <div>
            {
              address.map((item)=>{
                return(
                  <div key={item.id} className={style.addressDetailCardContainer}>
                    <div className={style.addressDetailNameText}>{item.name}</div>
                    <div className={style.addressDetailFullAddressText}>
                      <div>{item.address}</div>
                      <div>{item.locality}</div>
                      <div>{item.city}</div>
                      <div>{item.state}</div>
                      <div>{item.pinCode}</div>
                    </div>
                    <div className={style.addressDetailMobileNo}>Mobile: <span>{item.mobileNo}</span></div>
                    <button style={{fontSize:"14px",color:"#282C3F",fontWeight:"600",margin:"10px 0"}} onClick={()=>handleRemove(item.id)}>Remove</button>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.cartRightConatiner}>
            <div className={styles.cartRightConatinerTotalProduct}>PRICE DETAIL ({cart.length} Item)</div>
            <div className={styles.cartRightConatinerTotalMrp}>Total MRP <span>Rs.{totalMrp}</span></div>
            <div className={styles.cartRightConatinerDiscountOnMrp}>Discount on MRP <span>-Rs.{discountMrp}</span></div>
            <div className={styles.cartRightConatinerCoupanDiscount}>Coupan Discount <span>Apply Coupan</span></div>
            <div className={styles.cartRightConatinerConvFees}>Convenience Fee <span>Know More</span><span>Rs.99</span><span>FREE</span></div>
            <hr className={styles.cartRightConatinerHrTag}/>
            <div className={styles.cartRightConatinerTotalAmount}>Total Amount <span>Rs.{totalAmount}</span></div>
            <button onClick={handlePayment} className={styles.cartRightConatinerPlaceOrderButton}>CONTINUE</button>
        </div>
    </div>
  )
}
