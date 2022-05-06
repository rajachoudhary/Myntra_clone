import React from 'react'
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { CartNavbar } from './CartNavbar';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const navigate = useNavigate()
  const handleBuyAgain = ()=>{
    navigate("/")
  }
  return (
    <div>
      <CartNavbar/>
      <Result
        status="success"
        title="Order SuccessFully Purchased"
        extra={[
          
          <Button key="buy" onClick={handleBuyAgain}>Buy Again</Button>,
        ]}
      />
    </div>
  )
}
