import React from 'react';
import 'antd/dist/antd.css';
import style from "../../css/navbar.module.css"



export const CartNavbar =  () =>{
   
    
    return(
        <div className={style.navbar}>
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png" alt="logo" className={style.myntraLogo} />
            </a>
            <div className={style.cartNavbar}><span>Bag</span>-------- <span>ADDRESS</span>-------- <span>PAYMENT</span>            </div>
            <div style={{display:"flex",marginRight:"70px"}}>
                <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" height="28px" width="26px" alt="" />
                <div>100% Secure</div>
            </div>
                
                
                
        </div>
    )
}
