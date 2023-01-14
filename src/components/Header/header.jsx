import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [a, setA] = useState(1);
  const [adress, setAdress] = useState("hillsboro");

  return (
    <div className="header">
      <img
        src={require("./asset/Amazon_Logo.png")}
        alt="Amazon Logo"
        style={{ width: "130px", position: "relative" }}
      />

      <img
        className="address-icon"
        src={require("./asset/Address_Icon.png")}
        alt="address icon"
      />
      <div className="select-address">
        <div className="small-text">Hello</div>
        <div className="large-text">Select your address</div>
      </div>

      <div className="search-box">
        {/* <form> */}
        <select>
          <option>All</option>
          <option>Alexa</option>
          <option>Amazon Devices</option>
          <option>Amazon Fresh</option>
          <option>Amazon Pharmacy</option>
        </select>
        <input type="text"></input>
        <button>?</button>
        {/* </form> 不确定是否form*/}
      </div>

      <span className="select-language">
        <span>EN</span>
      </span>

      <div className="sign-in-area-1">
        <div style={{ textAlign: "left" }}>Hello, sign in</div>
        <div>Account & Lists</div>
      </div>

      <div className="return-orders">
        <div style={{ textAlign: "left" }}>Returns</div>
        <div>& Orders</div>
      </div>

      <span className="cart">
        <img
          src={require("./asset/Cart_Icon.png")}
          alt="cart icon"
          width="50%rem"
        />
        <span>0</span>
        <span>Cart</span>
      </span>
    </div>
  );
}
