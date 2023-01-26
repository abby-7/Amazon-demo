import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const [a, setA] = useState(1)
  const [adress, setAdress] = useState('hillsboro')

  return (
    <div className="header">
      <img
        src={require('./asset/Amazon_Logo.png')}
        alt="Amazon Logo"
        style={{ width: '130px', position: 'relative' }}
      />

      {/* box会超出高度 */}
      <img
        className="address-icon"
        src={require('./asset/Address_Icon.png')}
        alt="address icon"
      />
      <div className="select-address">
        <div className="small-text">Hello</div>
        <div className="large-text">Select your address</div>
      </div>

      <div className="search-box">
        {/* <form> */}
        <select className="search-left">
          <option>All</option>
          <option>Alexa</option>
          <option>Amazon Devices</option>
          <option>Amazon Fresh</option>
          <option>Amazon Pharmacy</option>
        </select>
        <input className="search-input" type="text"></input>
        <button className="search-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        {/* </form> 不确定是否form*/}
      </div>

      <span className="select-language">
        <img
          className="flag-icon"
          src={require('./asset/USflag_Icon.png')}
          alt="flag"
        />
        <select className="options">
          <option>EN</option>
          <option>ES</option>
        </select>
      </span>

      <Link
        to="/signin"
        style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="sign-in-area-1">
          <div className="small-text" style={{ textAlign: 'left' }}>
            Hello, sign in
          </div>
          <div className="large-text">Account & Lists</div>
        </div>
      </Link>

      <div className="return-orders">
        <div className="small-text">Returns</div>
        <div className="large-text">& Orders</div>
      </div>

      {/* 购物车 cart icon */}
      <span className="cart">
        <img
          src={require('./asset/Cart_Icon.png')}
          alt="cart icon"
          className="cart-icon"
        />
        <span className="item-amount">0</span>
      </span>
      <span className="cart-text">Cart</span>
    </div>
  )
}
