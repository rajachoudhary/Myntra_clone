import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Space } from 'antd';
import { AiOutlineUser} from 'react-icons/ai';
import style from "../../css/profile.module.css"
const menu = (
  <Menu className={style.profileHoverContainer}
    items={[
      {
        label: (
            <div className={style.profileHoverSubContainer}>
                <div className={style.profileHoverWelcome}>Welcome</div>
                <div>to access account and maange orders</div>
                <button className={style.profileHoverButton}>LOGIN/SIGNUP</button>
                <hr className={style.profileHoverHrTag}/>
                <p>Orders</p>
                <p>WishList</p>
                <p>Gift Cards</p>
                <p>Contact Us</p>
                <p>Myntra Insider <button className={style.profileHoverNewTag} >new</button></p>
                <hr className={style.profileHoverHrTag}/>
                <p>Myntra Credit</p>
                <p>Coupons</p>
                <p>Saved Cards</p>
                <p>Saved Addresses</p>
            </div>
        ),
       
      },
      
    ]}
  />
);

export const Profile =  () =>{
    return(
        <div>    
            <Dropdown overlay={menu}   >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        <AiOutlineUser className={style.profileLogo}/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}
