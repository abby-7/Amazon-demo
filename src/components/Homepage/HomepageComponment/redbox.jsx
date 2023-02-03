import { useState } from 'react';
import { Link } from "react-router-dom";
import './itemBox.css'

function Redbox(){

    return(<>

    <div className='warap'>
        <div className='red-box-container'>
            <div className="text-left">
                <h2 className="box-title">Deals on Amazon Devices</h2>
            </div>



            <div className="info-large-box">

                 <div className="info-small-box">
                    <div className="info-img-box">
                        <img
                        className="info-img"
                        src="https://m.media-amazon.com/images/I/11Bt4o2wftL._SY500__AC_SY200_.jpg"
                        alt="img"
                        ></img>
                    </div>

                    <div>
                    <span className="red-text-box small-font">$13.59 and under</span>
            <strong>
              <span className="red-text">Deal</span>
            </strong>
            </div>
              
                </div>





                 <div className="info-small-box">

                 </div>

                 <div className="info-small-box">

                 </div>

                 <div className="info-small-box">

                 </div>

                 <div className="info-small-box">

                 </div>

                 <div className="info-small-box">

                 </div>

            </div>




        </div>


    </div>
    
    </>)

}


export default Redbox

