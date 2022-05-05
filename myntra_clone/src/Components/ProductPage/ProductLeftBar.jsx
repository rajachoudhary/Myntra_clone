import React from 'react'
import style from "../../css/productLeftBar.module.css"

export const ProductLeftBar = () => {
  return (
    <div  className={style.productLeftBarCheckboxMainContanier}>
      <div className={style.productLeftBarCheckboxContanier}>
        <div className={style.productLeftBarCheckbox}>
          <input type="checkbox"  />
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
