import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import style from "../../css/address.module.css"
import { fetchAddress } from '../../Redux/action'
export const AddressForm = () => {
    const dispatch = useDispatch()
  const [query, setQuery] = useState({
    name:"",
    mobileNo:"",
    pinCode:"",
    address:"",
    locality:"",
    city:"",
    state:""
  })
  const handleChange = (e)=>{
    const  {name,value} = e.target
    setQuery({...query,[name]:value})
  }
  const handleAddress = ()=>{
    fetch("http://localhost:3000/address",{
      method: "POST",
      headers:{
       "Content-Type": "application/json",
      },
      body:JSON.stringify(query),
    })
    .then(()=>{
      dispatch(fetchAddress())
    })
    window.location.reload(true)
  }
  useEffect(()=>{
    dispatch(fetchAddress())
  },[])
  return (
    <div>
      
      <div className={style.addressRightContainer}>
        <div>
          <div className={style.addressContactText}>CONTACT DETAILS</div>
          <div className={style.addressIputField}>
            <label>Name</label>
            <input type="text" placeholder="" name="name" onChange={handleChange}/>
          </div>
          <div className={style.addressIputField}>
          <label>Mobile No.</label>
          <input type="number" placeholder="" name="mobileNo" onChange={handleChange}/>
          </div>
        </div>
        <div>
          <div className={style.addressAdressText}>ADDRESS</div>
          <div className={style.addressIputField}>
            <label>Pin Code</label>
            <input type="number" placeholder="" name="pinCode" onChange={handleChange}/>
          </div>
          <div className={style.addressIputField}>
          <label>Address (House No., Building, Street, Area)</label>
          <input type="text" placeholder="" name="address"  onChange={handleChange}/>
          </div>
          <div className={style.addressIputField}>
            <label>Locality/Town</label>
          <input type="text" placeholder="" name="locality" onChange={handleChange}/>
          </div>
          <div>
            <div className={style.addressIputField}>
              <label htmlFor="">City/District</label>
              <input type="text" placeholder="" name="city" onChange={handleChange}/>
            </div>
            <div className={style.addressIputField}>
              <label htmlFor="">State</label>
              <input type="text" placeholder="" name="state" onChange={handleChange}/>
            </div>
          </div>
          <div className={style.addressAdressAsText}>SAVE ADDRESS AS</div>
          <div className={style.addressHomeWorkButton}>
            <button>Home</button>
            <button>Work</button>
          </div>
          <div className={style.addressDefaultAddressText}>
            <input type="checkbox" />
            <label >Make this my default address</label>
          </div>
          <div className={style.addressAddAddressButton}>
            <button onClick={handleAddress}>ADD ADDRESS</button>
          </div>
        </div>
      </div>
      <hr className={style.addressHrTag}/>
    </div>
  )
}
