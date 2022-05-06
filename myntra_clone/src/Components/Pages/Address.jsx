import React, { useEffect, useState } from 'react'
import { AddressDetail } from '../AddressPage/AddressDetail'
import { AddressForm } from '../AddressPage/AddressForm'
import { FooterOfBagAddressCart } from '../FooterOfBagAddressCart'
import { CartNavbar } from './CartNavbar'

export const Address = () => {
  const [state, setState] = useState([])
  const [form,setForm] = useState(false)
  useEffect(()=>{
    fetch("http://localhost:3000/address")
    .then(res=>res.json())
    .then((res)=>{
      setState(res)
      console.log("raja",res.length)
      if(res.length>0){
        setForm(true)
      } else {
        setForm(false)
      }
    })
  },[])
  return (
    <div>
      <CartNavbar/>
      {form ? <AddressDetail/> : <AddressForm/>}
      {/* <AddressForm/>
      <AddressDetail/> */}
      <FooterOfBagAddressCart/>
    </div>
  )
}
