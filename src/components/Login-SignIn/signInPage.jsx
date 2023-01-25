import { useState } from 'react';
import LoginFooter from './loginFooter';
import './loginCSS.css';
import { Link } from "react-router-dom";
import USER_DATA from './constants';

function SignInPage() {
    const [inputEmail,setInputEmail]=useState()
    const [errorInfo,setErrorInfo]=useState(false)
    const [notfoundError,setNotfoundError]=useState(false)

    const handleContinue=()=>{
        setNotfoundError(false)
        setErrorInfo(false)
        if(!inputEmail){
            setErrorInfo(true)
        } else {
            let temp=[...USER_DATA]
            let index=temp.findIndex((item)=>item.mobilEmail===inputEmail)
            if(index===-1){
                setNotfoundError(true)
            }

            console.log(index)
        }


    }



    return (<> 
    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
     <img src='https://i.hd-r.cn/4ac9e815209fb977cee53d6fae5f9cb8.png' alt='img' className='login-logo'></img>
     </Link>

     <div className='signin-page-container'>

        <h1>Sign in</h1>
        <br/>
        <h2>Email or mobile phone number</h2>
            <input type='text' className='signin-input' onChange={(e)=>{setInputEmail(e.target.value)}}></input>
            {errorInfo?<div className='error-alter'>! Enter your email or mobile phone number</div>:null}
            {notfoundError?<div className='error-alter'>! We cannot find an account with that email address</div>:null}

            <Link to="/signin/password" style={{ color: 'inherit', textDecoration: 'inherit'}}>            
                <button className='continue-btn' onClick={handleContinue}>Continue</button>
            </Link>
            
            <br/>
            <div className='text1'>
                By continuing, you agree to Amazon's 
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088'  target="_blank" rel="noopener noreferrer"> Conditions of Use</a> and 
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496'  target="_blank" rel="noopener noreferrer"> Privacy Notice</a>.
            </div>

            <div className='text1'> <a href='#/'  target="_blank" rel="noopener noreferrer">Need help?</a></div>

    </div>

    <div className='login-container'>
    <div class="strike">
         <span className='gray-small'>New To Amazon?</span>
    </div>
    <Link to="/createaccount" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button className='create-account-btn'>Create your Amazon account</button>
    </Link>

    </div>

    <LoginFooter/>
    
    </>)
}


export default SignInPage