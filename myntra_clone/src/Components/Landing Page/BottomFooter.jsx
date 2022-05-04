import React from "react";
import style from "../../css/footer.module.css";

export const BottomFooter = () => {
  return (
    <>
      <div className={style.landingFooter}>
        <div className={style.landingPAgetext}>
          <div className={style.footerHeading}>ONLINE SHOPPING</div>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
          <div>Home &Living</div>
          <div>Beauty</div>
          <div>Gift Card</div>
          <div>Myntra Insider</div>
        </div>
        <div className={style.landingPAgetext}>
          <div className={style.footerHeading}>USEFUL LINKS</div>
          <div>Contact Us</div>
          <div>FAQ</div>
          <div>T&C</div>
          <div>Terms Of Use</div>
          <div>Track Orders</div>
          <div>Shipping</div>
          <div>Cancellation</div>
          <div>Returns</div>
          <div>Whitehat</div>
          <div>Blog</div>
          <div>Careers</div>
          <div>Privacy Policy</div>
          <div>Site Map</div>
          <div>Corporate Information</div>
        </div>
        <div>
          <div className={style.landingPAgetext}>
            <div className={style.footerHeading}>
              EXPERIENCE MYNTRA APP ON MOBILE
            </div>
            <div className={style.footerPlayStoreimages}>
              <div>
                <img
                  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  alt="PlayStore"
                />
              </div>
              <div>
                <img
                  src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  alt="Apple Store"
                />
              </div>
            </div>
          </div>
          <div className={style.footerKeepinTouch}>KEEP IN TOUCH</div>
          <div className={style.footerSocialMediaLogoContainer}>
            <div className={style.footerSocialMediaLogo}>
              <img
                src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                alt="facebook"
              />
            </div>
            <div className={style.footerSocialMediaLogo}>
              <img
                src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                alt="twitter"
              />
            </div>
            <div className={style.footerSocialMediaLogo}>
              <img
                src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                alt="You tube"
              />
            </div>
            <div className={style.footerSocialMediaLogo}>
              <img
                src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                alt="instagram"
              />
            </div>
          </div>
        </div>
        <div className={style.footerRightLogo}>
          <div className={style.footerOriginalLogo}>
            <img
              src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
              alt="instagram"
            />
            <div>
              <span className={style.footerBoldText}>100% ORIGINAL </span>
              guarantee for all products at myntra.com{" "}
            </div>
          </div>
          <div className={style.footerThirtyLogo}>
            <img
              src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
              alt="instagram"
            />
            <div>
              <span className={style.footerBoldText}>
                Return within 30days{" "}
              </span>
              of receiving your order
            </div>
          </div>
        </div>
      </div>
      <div className={style.footerPopularSearchesHeading}>
        <div>POPULAR SEARCHES</div>
        <hr />
      </div>
      <div className={style.BottomFooterText}>
        Sherwani | Track Pants | Blazers | Sweaters For Men | Men Wedding
        Dresses | Kurta Pajama | Raincoats | Shorts | Trousers | Waistcoat |
        Inner Wear | Nightwear | Jeans | Shirts | Jogger |Jeans | Men Suits | T
        Shirts | Sweatshirts | Jackets For Men | Tracksuits | Ripped Jeans |
        Ethnic Wear | Hoodies | Raksha Bandhan Gifts | Watches Shoes Belts |
        Swimwear | Dhotis | Boxers | Vests | Thermals Socks | Shrugs Bracelets Rings |
        Sunglasses | Headphones | Wallets | Helmets | Caps | Mufflers | Gloves Ties |
        Cufflinks | Men Sandals | Floaters | Flip Flops | Trunks Bags
      </div>
        <div className={style.BottomFooterContactPart}>
          <div>In case of any concern, <span>Contact Us</span></div>
          <div>© 2022 www.myntra.com. All rights reserved.</div>
        </div>
    </>
  );
};
