import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  sort } from '../../Redux/action'

export const Product = () => {
  const dispatch = useDispatch()
  const item = useSelector(state =>state)
  console.log("Raja" ,item.item)
  // const [value,setValue] = useState("")
  // const filterData = (e)=>{
  //   if(e.target.value === "highToLow"){
  //     console.log(e.target.value)
  //     dispatch(highToLowData(data))
  //   } else {
  //     console.log("raja")
  //   }
  // }
  return (
    <div>
      <div>
        <div>FILTERS</div>
        <div>
          <div>better Cotton Initiative</div>
          <div>Bundles</div>
          <div>Country of origin</div>
          <div>Distress</div>
          <div>Fabric</div>
          <div>Fabric2</div>
          <div>Fade</div>
        </div>
        <div>
        <select onChange={(e)=>{
          dispatch(sort(e.target.value))
          
        }}>
          <option value="">Sort by : Recommended</option>
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
  )
}

