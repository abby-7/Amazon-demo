import { useState } from 'react';
import { Link } from "react-router-dom";
import './itemBox.css'

function ItemBox2(){

    return(<>

<div className='warap'>
        <div className='main-grid'>
            <div className='large-grid'>
                 <div className="text-left">
                     <h2 className="box-title">Plus size dresses under $30</h2>
                </div>

                <div className="img-container">
                    <img alt="img" className="img-test" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/journeys/MTcwYjYxZDQt/MTcwYjYxZDQt-MWI0Njg5Y2Mt-w379._SY304_CB616084136_.jpg"></img>
                </div>
                
                <div className="text-left">Shop now</div>


            </div>

            <div className='large-grid'>
                <div className="text-left">
                        <h2 className="box-title">Everyday low prices</h2>
                    </div>

                    <div className="img-container">
                        <img alt="img" className="img-test" src="https://images-na.ssl-images-amazon.com/images/G/01/composer/uploads/HomepageCategoryCardfamily-pack/desktop/AFO_ATFSCC_grilled_meat_ugmgh2m_1x._SY304_CB619274830_.jpg"></img>
                    </div>
                    
                    <div className="text-left">Shop same-day delivery</div>


            </div>

            <div className='large-grid'>
            <div className="text-left">
          <h2 className="box-title">Viral products you will love</h2>
        </div>

        <div className="mid-box">
          <div className="small-box">
            <div className="small-img-box"
            style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/InternetFamous/Holiday/Gateway/QuadCards/IF_Holiday_OctIF_Beauty_GW_Quadcard_DT_186x116._SY116_CB608673955_.jpg")',
                  backgroundSize: "100% 100%"
              }}></div>
            

            <span>Beauty</span>
          </div>
          <div className="small-box">
            <div
              className="small-img-box"
              style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/InternetFamous/Flips/IF-Holiday/Content/Gateway/QuadCards/Batch3/IF_Holiday_IP_Remi_GW_Quadcard_DT_186x116._SY116_CB606013989_.jpg")',
                backgroundSize: "100% 100%"
              }}
            ></div>
            <span>Women's Fashion</span>
          </div>
        </div>

        <div className="mid-box">
          <div className="small-box">
            <div className="small-img-box"
            style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/InternetFamous/Flips/IF-Holiday/Content/Gateway/QuadCards/Batch2/IF_Holiday_IP_Home_GW_Quadcard_DT_186x116._SY116_CB607016931_.jpg")',
                backgroundSize: "100% 100%"
              }}></div>
            <span>Home</span>
          </div>

          <div className="small-box">
            <div className="small-img-box"  style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/InternetFamous/Holiday/Gateway/QuadCards/IF_Holiday_OctIP_MFashion_GW_QC_DT_186x116._SY116_CB608677835_.jpg")',
                backgroundSize: "100% 100%"
              }}></div>
            <span>Men's Fashion</span>
          </div>
        </div>

        <div className="text-left">Shop pretty must-haves</div>
                
                   
            </div>

            <div className='large-grid'>
            <div className="text-left">
          <h2 className="box-title">Go places in new trends</h2>
        </div>

        <div className="mid-box">
          <div className="small-box">
            <div className="small-img-box"
            style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/Premium_Brands/Winter_2022/QuadCard/Desktop/FeaturedTrends_C1_d_PremiumWinter_QuadCard._SY116_CB618681185_.jpg")',
                  backgroundSize: "100% 100%"
              }}></div>
            

            <span>Next-level loafers</span>
          </div>
          <div className="small-box">
            <div
              className="small-img-box"
              style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/Premium_Brands/Winter_2022/QuadCard/Desktop/1x/FeaturedTrends_C2_d_PremiumWinter_QuadCard._SY116_CB619357944_.jpg")',
                backgroundSize: "100% 100%"
              }}
            ></div>
            <span>Lipstick hues</span>
          </div>
        </div>

        <div className="mid-box">
          <div className="small-box">
            <div className="small-img-box"
            style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/Premium_Brands/Winter_2022/QuadCard/Desktop/FeaturedTrends_C3_d_PremiumWinter_QuadCard._SY116_CB618681185_.jpg")',
                backgroundSize: "100% 100%"
              }}></div>
            <span>Getaway-bound</span>
          </div>
          
          <div className="small-box">
            <div className="small-img-box"  style={{
                backgroundImage:
                  'url("https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/Premium_Brands/Winter_2022/QuadCard/Desktop/FeaturedTrends_C4_d_PremiumWinter_QuadCard._SY116_CB618681185_.jpg")',
                backgroundSize: "100% 100%"
              }}></div>
            <span>Suit up</span>
          </div>
        </div>

        <div className="text-left">Shop Premium Brands fashion</div>
                
            </div>



        </div>


    </div>
    
    
    </>)
}


export default ItemBox2