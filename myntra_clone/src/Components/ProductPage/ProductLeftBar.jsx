import React, { useDebugValue, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../../css/productLeftBar.module.css"
import { getAllData, sortByBrand } from '../../Redux/action'

export const ProductLeftBar = () => {
  const [checked, setChecked] = useState(false)
  const [state,setState] = useState("")
  const sortBycheckBox = useSelector(state => state.sortBycheckBox)
  console.log("bybrand",sortBycheckBox)
  const dispatch = useDispatch()
  const handleCheckbox = (e)=>{
    // console.log(e.target.name)
    // setState(e.target.name)
    // setChecked(!checked)
    // if(checked){
    //    dispatch (sortByBrand(state))
    //   //  setChecked(!checked)
    // } 
    // else {
    //   dispatch(getAllData())
    //   // setChecked(checked)
    // }
  }
  console.log("Raja", checked)
  return (
    <div  className={style.productLeftBarCheckboxMainContanier}>
      <div className={style.productLeftBarCheckboxContanier}>
        <div className={style.productLeftBarCheckbox}>
          <input type="checkbox" onClick={(e)=>handleCheckbox(e)} checked={checked} name="men"/>
          <label>Men</label>
        </div>
        <div className={style.productLeftBarCheckbox}>
          <input type="checkbox" />
          <label>Women</label>
        </div>
        <div className={style.productLeftBarCheckbox}>
          <input type="checkbox" />
          <label>Boys</label>
        </div>
        <div className={style.productLeftBarCheckbox}>
          <input type="checkbox" />
          <label>Girls</label>
        </div>
      </div>
      <div className={style.productLeftBarBrandContanier}>
        <div className={style.productLeftBarBrandText}>BRANDS</div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox"  />
          <label>Roadster</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>Levis</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>WROGN</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>HIGHLANDER</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>Nautica</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>SASSAFRAS</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>Harvard</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>SPYKAR</label>
        </div>
      </div>
      <div className={style.productLeftBarBrandContanier}>
        <div className={style.productLeftBarBrandText}>DISCOUNT RANGE</div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox"  />
          <label>Rs.100 to Rs.499</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>Rs.500 to Rs.999</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>Rs.1000 to Rs.1499</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>Rs.1500 to Rs.1999</label>
        </div>
        <div className={style.productLeftBarBrandCheckbox}>
          <input type="checkbox" />
          <label>Rs.2000 to Rs.2499</label>
        </div>
      </div>
      <div className={style.productLeftBarBrandContanier}>
        <div className={style.productLeftBarBrandText}>DISCOUNT RANGE</div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox"  />
          <label>10% and above</label>
        </div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox" />
          <label>20% and above</label>
        </div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox" />
          <label>30% and above</label>
        </div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox" />
          <label>40% and above</label>
        </div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox" />
          <label>50% and above</label>
        </div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox" />
          <label>60% and above</label>
        </div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox" />
          <label>70% and above</label>
        </div>
        <div className={style.productLeftBarDiscountRangeCheckbox}>
          <input type="checkbox" />
          <label>80% and above</label>
        </div>
      </div>
    </div>
  )
}
