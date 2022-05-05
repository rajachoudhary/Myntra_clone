
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../../css/productDetail.module.css"
import {BsHandbagFill, BsTruck} from "react-icons/bs"
import { AiOutlineHeart } from 'react-icons/ai'
import { addToCart } from '../../Redux/action'

export const ProductDetail = () => {
    const singleData = useSelector(state => state.singleData) 
    const dispatch = useDispatch()
    const handleCart = (id)=>{
        // console.log(id)
        alert("Product added successfully", id)
        dispatch(addToCart(id))
    }
  return (
    <div>
        {
            singleData.map((item)=>{
                return(
                    <div key={item.id} className={style.productDetailContainer}>
                        <div className={style.productDetailProductImage}>
                            <img src={item.image} alt="" />
                            <img src={item.image} alt="" />
                        </div>
                        <div className={style.productDetailRightContainer}>
                            <div className={style.productDetailBrandHeading}>{item.brand}</div>
                            <div className={style.productDetailTitleHeading}>{item.title}</div>
                            <div className={style.productDetailRatings}>{item.ratings} <span className={style.productDetailRatingsStarColor}>★</span> |<span className={style.productDetailNoOfRatings}> 3.7k Ratings</span></div>
                            <hr className={style.productDetailHr}/>
                            <div className={style.productDetailPriceContainer}>
                                <div>Rs. {item.discountRate}</div>
                                <div>Rs.{item.price}</div>
                                <div>({item.discount})</div>
                            </div>
                            <div className={style.productDetailInclusiveAllTaxes}>inclusive of all taxes</div>
                            <div className={style.productSizeTextContainer}>
                                <div>SELECT SIZE</div>
                                <div>SIZE CHART</div>
                            </div>
                            <div className={style.productSizeContainer}>
                                {
                                    item.size.map((sizeNo)=>{
                                        return(
                                            <div>{sizeNo}</div>
                                        )
                                    })
                                }
                            </div>
                                <AiOutlineHeart className={style.productDetailWishlistHeart}/>
                            <div className={style.productDetailButtons}>
                                <BsHandbagFill className={style.productDetailButtonBag}/>
                                <button onClick={()=>handleCart(item.id)}>ADD TO BAG</button>
                                <button >WISHLIST</button>
                            </div>
                            <div className={style.productDetailDeliverySection}>
                                <div>DELIVERY OPTIONS</div>
                                <div>
                                    <BsTruck className={style.productDetailDeliveryBus}/>
                                </div>
                            </div>
                            <div className={style.productDetailPinCodeContainer}>
                                <input type="text" placeholder="Enter PinCode"/>
                                <div>Check</div>
                            </div>
                            <p className={style.productDetailBelowPinCodeText}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                            <div className={style.productDetaildeliveryInfo}>
                                <p>100% Original Products</p>
                                <p>Pay on delivery might be available</p>
                                <p>Easy 30 days returns and exchanges</p>
                                <p>Try & Buy might be available</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}
