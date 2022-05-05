import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import style from "../../css/productData.module.css"
import { handleSingleData } from '../../Redux/action'

export const ProductData = () => {
    const item = useSelector(state => state.item)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSingleProduct = (id) =>{
        navigate(`/products/${id}`)
        dispatch(handleSingleData(id))
    }
 
  return (
    <div className={style.productDataContainer}>
        {
            item.map((data)=>{
                return(
                    <div className={style.productDataCard} key={data.id} onClick={()=>handleSingleProduct(data.id)}>
                        <img src={data.image} alt="" className={style.productDataImage}/>
                        <div  className={style.productDataRatings}>
                            <div>{data.ratings} <span>★</span> | {data.totalBuy}</div>
                        </div>
                        <div className={style.productDataBrand}>{data.brand}</div>
                        <div className={style.productDataTitle}>{data.title}</div>
                        <div className={style.productDataPrice}>
                            <div>Rs.{data.discountRate}</div>
                            <div>Rs.{data.price}</div>
                            <div>({data.discount})</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
