import { useState } from 'react';
import LoginFooter from './loginFooter';
import './loginCSS.css';

function SignInPasswordPage(){

    return(<>
    <img src='https://i.hd-r.cn/4ac9e815209fb977cee53d6fae5f9cb8.png' alt='img' className='login-logo'></img>
    <div className='signin-page-container'>

        <h1>Sign in</h1>
        <div>xxx@xxx.com  <a href='#/'>Change</a></div>
        <br/>
        <div class="link-container">

            <span className='span-left'>Password  </span>
            <span className='span-right'>Forgot your password?</span>

        </div>
       
            <input type='text' className='signin-input'></input>

            <button className='continue-btn'>Continue</button>
        <br/>
        <div className='link-container'>
             <input type="checkbox"></input>

      </div>
    </div>


    <LoginFooter/>
    </>)
}

export default SignInPasswordPage