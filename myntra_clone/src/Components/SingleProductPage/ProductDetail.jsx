
import React from 'react'
import { useSelector } from 'react-redux'
import style from "../../css/productDetail.module.css"

export const ProductDetail = () => {
    const singleData = useSelector(state => state.singleData) 
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
                            <div className={style.productSizeContainer}>
                                <div>SELECT SIZE</div>
                                <div>SIZE CHART</div>
                            </div>
                            <div>
                                {
                                    item.size.map((sizeNo)=>{
                                        return(
                                            <div>{sizeNo}</div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button>GO TO BAG</button>
                                <button>WISHLIST</button>
                            </div>
                            <div>
                                <div>{item.discountRate}</div>
                                <div>{item.price}</div>
                                <div>{item.discount}</div>
                            </div>
                            <div>Seller:<span>Truecom Retail</span></div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
