import { useState } from 'react';
import { Link } from "react-router-dom";
import './itemBox.css'

function ItemBox1(){

    return(<>
    <div className='warap'>
        <div className='main-grid'>
            <div className='large-grid'>
                 <div className="text-left">
                     <h2 className="box-title">The pre-loved edit at Shopbop</h2>
                </div>

                <div className="img-container">
                    <img alt="img" className="img-test" src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2021/PreLovedEdit/mp_20220207_luxury_desktopsinglecategory_desktop_379x304v2._SY304_CB624970717_.jpg"></img>
                </div>
                
                <div className="text-left">See the full edit from Shopbop</div>


            </div>

            <div className='large-grid'>
                <div className="text-left">
                        <h2 className="box-title">Kitchen wedding gifts</h2>
                    </div>

                    <div className="img-container">
                        <img alt="img" className="img-test" src="https://images-na.ssl-images-amazon.com/images/G/01/home/awr/2023_Projects/Gateway/01_January/AWR_Gateway_Jan23_DesktopImage_379x304_B07QMWZ6PT._SY304_CB604617224_.jpg"></img>
                    </div>
                    
                    <div className="text-left">Add to your registry</div>


            </div>

            <div className='large-grid'>
            <div className="text-left">
          <h2 className="box-title">Valentine's Day picks</h2>
        </div>

        <div className="mid-box">
          <div className="small-box">
            <div className="small-img-box"
            style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/WIN23/GW/DQC/D1_DQC_AF_JAN_VALENTINE_WATCHES_186x116._SY116_CB620189454_.jpg")',
                  backgroundSize: "100% 100%"
              }}></div>
            

            <span>Watches</span>
          </div>
          <div className="small-box">
            <div
              className="small-img-box"
              style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/WIN23/GW/DQC/D2_DQC_AF_JAN_VALENTINE_ACCESSORIES_186x116._SY116_CB620189454_.jpg")',
                backgroundSize: "100% 100%"
              }}
            ></div>
            <span>Accessories</span>
          </div>
        </div>

        <div className="mid-box">
          <div className="small-box">
            <div className="small-img-box"
            style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/WIN23/GW/DQC/D3_DQC_AF_JAN_VALENTINE_JEWELRY_186x116._SY116_CB620189454_.jpg")',
                backgroundSize: "100% 100%"
              }}></div>
            <span>Jewelry</span>
          </div>
          <div className="small-box">
            <div className="small-img-box"  style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/WIN23/GW/DQC/D4_DQC_AF_JAN_VALENTINE_SLEEPWEAR_186x116._SY116_CB620189454_.jpg")',
                backgroundSize: "100% 100%"
              }}></div>
            <span>Lingerie </span>
          </div>
        </div>

        <div className="text-left">Shop pretty must-haves</div>
                
                   
            </div>
            <div className='small-grid'>
            <h2 className="box-title margin-20">Sign in for the best experience</h2>

            <Link to="/signin" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                 <button className='sign-btn margin-20'>Sign in securely</button>
            </Link>
            

            </div>
            <div className='small-grid' id='no-background-color'>
                <img src='https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/5b05d703-5bf3-4e1c-a21f-f5c921e044d1.jpg' alt="img"></img>

            </div>



        </div>


    </div>
    
    
    </>)
}


export default ItemBox1