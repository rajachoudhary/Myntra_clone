import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Space } from 'antd';
import style from "../../../css/navbar.module.css"
import { BiSearch, BiShoppingBag} from 'react-icons/bi';
import { AiOutlineUser, AiOutlineHeart} from 'react-icons/ai';
const menu = (
  <Menu className={style.navbarHover}
    items={[
      {
        label: (
            <div className={style.navberHoverContainer}>
                <div>
                    <div>
                        <div className={style.navbarHoverHeading}>
                            <a href="">Topwear</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">T-Shirts </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">casual Shirts</a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Formal Shirts </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Sweatshirts </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Sweaters </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Jackets</a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">BVlazers $ Coats </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Suits </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Rain Jackets </a>
                        </div>
                    </div>
                    <div>
                        <div className ={style.navbarHoverHeading}>
                            <a href=""> Indian & festive Wear </a>
                        </div> 
                        <div className ={style.blackCss}>
                            <a href="">Kurtas & Kurta Sets </a>
                        </div> 
                        <div className ={style.blackCss}>
                            <a href="">Sherwani </a>
                        </div > 
                        <div className ={style.blackCss}>
                            <a href="">Nehru Jackets </a>
                        </div> 
                    </div>
                </div>
                <div className={style.navbarHoverBackground}>
                    <div>
                        <div className={style.navbarHoverHeading}>
                            <a href="">Bottomwear</a>
                        </div>
                        <div  className={style.blackCss}>
                            <a href="">Jeans </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Casual Trousers</a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Formal Trousers </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Shorts </a>
                        </div>
                        <div className ={style.blackCss}>
                            <a href="">Track Pants & Joggers </a>
                        </div>
                    </div>
                    <div>
                        <div className={style.navbarHoverHeading}>
                            <a href="">Inner & Sleepwear </a>
                        </div> 
                        <div className ={style.blackCss}>
                            <a href="">Briefs & Trunks </a>
                        </div> 
                        <div className ={style.blackCss}>
                            <a href="">Boxers</a>
                        </div> 
                        <div className ={style.blackCss}>
                            <a href="">Vests </a>
                        </div> 
                        <div className ={style.blackCss}>
                            <a href="">Sleepwear & Loungewear </a>
                        </div> 
                        <div className ={style.blackCss}>
                            <a href="">Thermals </a>
                        </div> 
                    </div>
                    <div className={style.navbarHoverHeading}>
                        <a href="">Plus Size</a>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={style.navbarHoverHeading}>
                            <a href="">Footwear</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Casual Shoes </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Sports Shoes </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Formal Shoes</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Sneakers </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Sandals & Floaters </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Flip Floops</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Socks </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Indian </a>
                        </div>
                    </div>
                    <div className={style.navbarHoverHeading}>
                        <a href="">Personal Care & Grooming </a>
                    </div>
                    <div className={style.navbarHoverHeading}>
                        <a href="">Sunglasses & Frames </a>
                    </div>
                    <div className={style.navbarHoverHeading}>
                        <a href="">Watches </a>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <div className={style.navbarHoverHeading}>
                            <a href="">Sports & Active Wear</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Sports Shoes </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Sports Sandals</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Active T-shirts </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Track Pants & Shorts </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Tracksuits </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Jackets & Sweatshirts </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Sports Accessories </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Swimwear </a>
                        </div>
                        
                    </div>
                    <div>
                        <div className={style.navbarHoverHeading}>
                            <a href="">Gadgets </a>
                        </div> 
                        <div className={style.navbarHoverHeading}>
                            <a href="">Smart Wearables</a>
                        </div> 
                        <div className={style.blackCss}>
                            <a href="">Fitness Gadgets </a>
                        </div> 
                        <div className={style.blackCss}>
                            <a href="">Headphones </a>
                        </div> 
                    </div>
                </div>
                <div>
                    <div>
                        <div className={style.navbarHoverHeading}>
                            <a href="">Fashion Accessories</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Wallets </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Belts</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Indian </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Perfumes & Body Mists </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Trimmers </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Deodrants </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Ties Cufflinks & Pocket Squares </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Accessory Gift Sets</a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Caps & Hats </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Mufflers, Scarves & Gloves </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Phone Cases </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Rings & WristWear </a>
                        </div>
                        <div className={style.blackCss}>
                            <a href="">Helmets </a>
                        </div>
                    </div>
                    
                    <div className={style.navbarHoverHeading}>
                        <a href="">Bags & Backpacks </a>
                    </div> 
                    <div className={style.navbarHoverHeading}>
                        <a href="">Luggages & Trolleys </a>
                    </div> 
                    
                </div>
            </div>
        ),
       
      },
      
    ]}
  />
);

export const Navbar =  () =>{
    return(
        <div className={style.navbar}>
            <a href="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png" alt="logo" className={style.myntraLogo} />
            </a>
            <Dropdown overlay={menu} className={style.navbarOption}  >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        Men
                    </Space>
                </a>
            </Dropdown>
            <Dropdown overlay={menu} className={style.navbarOption}  >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        Women
                    </Space>
                </a>
            </Dropdown>
            <Dropdown overlay={menu} className={style.navbarOption}  >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        Kids
                    </Space>
                </a>
            </Dropdown>
            <Dropdown overlay={menu} className={style.navbarOption}  >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        Men
                    </Space>
                </a>
            </Dropdown>
            <Dropdown overlay={menu} className={style.navbarOption}  >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        Home & living
                    </Space>
                </a>
            </Dropdown>
            <Dropdown overlay={menu} className={style.navbarOption}  >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        Beauty
                    </Space>
                </a>
            </Dropdown>
            <Dropdown overlay={menu} className={style.navbarOption}  >
                <a onClick={e => e.preventDefault()}>
                    <Space >
                        Studio
                        <sup className={style.studioPower}>NEW</sup>
                    </Space>
                </a>
            </Dropdown>
            <div className={style.navbarInput}>
                <BiSearch className={style.searchButton}/>
                <input type="text" placeholder='Search for products brands and more'/>
            </div>
            <div className={style.userIcons}>
                <div>
                    <AiOutlineUser className={style.userIconsButton}/>
                    <div>Profile</div>
                </div>
                <div>
                    <AiOutlineHeart className={style.userIconsButton}/>
                    <div>Wishlist</div>
                </div>
                <div>
                    <BiShoppingBag className={style.userIconsButton}/>
                    <div>Bag</div>
                </div>
            </div>
        </div>
    )
}
