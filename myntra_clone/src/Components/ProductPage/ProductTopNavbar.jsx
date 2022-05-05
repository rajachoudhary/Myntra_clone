import React from 'react'
import { useDispatch} from 'react-redux'
import {  sort } from '../../Redux/action'
import style from "../../css/productTopNavbar.module.css"

export const ProductTopNavbar = () => {
  const dispatch = useDispatch()
  
  return (
    <div>
      <div className={style.topFilterNavbar}>
        <div className={style.filterText}>FILTERS</div>
        <div className={style.filterNavbar}>
          <div >
            <select name="" id="" >
              <option value="" >better Cotton Initiative</option>
            </select>
          </div>
          <div>
            <select name="" id="">
              <option value="">Bundles</option>
            </select>
          </div>
          <div>
            <select name="" id="">
              <option value="">Country of origin</option>
            </select>
          </div>
          <div>
          <select name="" id="">
              <option value="">Distress</option>
            </select>
          </div>
          <div>
            <select name="" id="">
              <option value="">Fabric</option>
            </select>
          </div>
          <div>
            <select name="" id="">
              <option value="">Fabric2</option>
            </select>
          </div>
          <div>
            <select name="" id="">
              <option value="">Fade</option>
            </select>
          </div>
          <div>
            <select className={style.filterSection} onChange={(e)=>{dispatch(sort(e.target.value)) }}>
              <option value="">{`Sort By : ${<b>Recommended</b>}`} </option>
              <option value="">What's New</option>
              <option value="">Popularity</option>
              <option value=" ">Better Discount</option>
              <option value="discountRate" >Price : High to Low</option>
              <option value="">Price : Low to High</option>
              <option value="">Customer Rating</option>
            </select>
          </div>
          
        </div>
      </div>
      <hr />
    </div>
  )
}

