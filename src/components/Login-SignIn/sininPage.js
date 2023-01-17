import { useState } from 'react';
import LoginFooter from './loginFooter';
import './loginCSS.css';

function SignInPage() {

    return (<> 
     <img src='https://i.hd-r.cn/4ac9e815209fb977cee53d6fae5f9cb8.png' alt='img' className='login-logo'></img>
     <div className='signin-page-container'>

        <h1>Sign in</h1>
        <br/>
        <h2>Email or mobile phone number</h2>
            <input type='text' className='signin-input'></input>

            <button className='continue-btn'>Continue</button>
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
        <button className='create-account-btn'>Create your Amazon account</button>

    </div>

    <LoginFooter/>
    
    </>)
}


export default SignInPage
