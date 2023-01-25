import { useState } from 'react';
import './loginCSS.css';
import LoginFooter from './loginFooter';
import { Link } from "react-router-dom";

function CreateAccount() {
  const [name,setName]=useState()
  const [phoneEmail,setphoneEmail]=useState()
  const [password,setPassword]=useState()
  const [rePassword,setRePassword]=useState()

  const [userData,setUserData]=useState([])


  // about error alter, should be improved by show the alter without useState
  // will do it later

  const [nameError,setNameError]=useState(false)
  const [phoneError,setPhoneError]=useState(false)
  const [passwordError,setPasswordError]=useState(false)
  const [passLenwordError,setPasswordLenError]=useState(false)
  const [rePError,setRePError]=useState(false)



  const handleContinue=()=>{
    let legalInput = true
    setNameError(false)
    setPasswordError(false)
    setRePError(false)
    setPhoneError(false)
    setPasswordLenError(false)

    if(!name){
      setNameError(true)
      legalInput=false
    }

    if(!phoneEmail){
      setPhoneError(true)
      legalInput=false
    }

    if(!password){
      setPasswordError(true)
      legalInput=false
    } else if(password.length<6){
      setPasswordLenError(true)
      legalInput=false
    }



    if(!rePassword || rePassword!==password){
      setRePError(true)
      legalInput=false
    }


    if(legalInput){
      let temp=[...userData]
      // will change id later
      temp=[...temp,{userName:name,mobilEmail:phoneEmail,password:password,id:Date.now()}]
      console.log(temp)
      setUserData(temp)
    }

 



  }


  return (
    <>
    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
       <img src='https://i.hd-r.cn/4ac9e815209fb977cee53d6fae5f9cb8.png' alt='img' className='login-logo'></img>
    </Link>

      <div className='signin-page-container'>
  
      
     <h1>Create Account</h1>

     <div>
        <h2>Your Name</h2>
        <input type="text" placeholder="First and Last Name" maxLength="50" onChange={(e)=>{setName(e.target.value)}} name="userName"></input>
        {nameError?<div className='error-alter'>! Enter your name</div>:null}

     </div>

     <div>
        <h2>Mobile number or email</h2>
        <input maxLength="50" onChange={(e)=>{setphoneEmail(e.target.value)}}></input>
        {phoneError?<div className='error-alter'>! Enter your email or mobile phone number</div>:null}

     </div>

     <div>
        <h2>Password</h2>
        <input type="password" placeholder="At least 6 characters" maxLength="50" onChange={(e)=>{setPassword(e.target.value)}}></input>
        {passwordError?<div className='error-alter'>! Enter your password</div>:passLenwordError?<div className='error-alter'>! Password musc at least 6 characters</div>:null}

     </div>

     <div>
        <h2>Re-enter password</h2>
        <input type="password" maxLength="50" onChange={(e)=>{setRePassword(e.target.value)}}></input>
        {rePError?<div className='error-alter'>! Passwords must match</div>:null}
        

     </div>

     <button className='continue-btn' onClick={handleContinue}>Continue</button>

     <div  className='text1'>By creating an account, you agree to Amazon's <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088' target="_blank" rel="noopener noreferrer">
      Conditions of Use </a> and <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496'  target="_blank" rel="noopener noreferrer"> Privacy Notice</a>.</div>
      <hr class="hr1" />


      <div className='text1'>
        
            Already have an account?  <Link to="/signin" >Sign in</Link> <br/>
            <br/>
            Buying for work? Create a free business account

      </div>

      </div>
      

      <LoginFooter/>
    </>
  );
}

export default CreateAccount;