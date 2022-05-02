import React from 'react'
import style from "../../css/banner.module.css"
import bannerImage from "../../Images/bannerImage.png"
export const Banner = () => {
  return (
    <div>
        <div className={style.banner}>   
            <img src={bannerImage} alt="banner"  />
        </div>
    </div>
  )
}
