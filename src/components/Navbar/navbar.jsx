import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="nav-main">
      <div className="container-nav">
        <ul>
          <li className="border-white">
            <span className="open-nav-slider">
              <svg class="hamburger-menu-icon" viewBox="0 0 100 100">
                <rect class="bar1" x="0" y="0" width="100" height="15" />
                <rect class="bar2" x="0" y="35" width="100" height="15" />
                <rect class="bar3" x="0" y="70" width="100" height="15" />
              </svg>
              All
            </span>
          </li>
          <li className="border-white">
            <a href="#">Clinic</a>
          </li>
          <li className="border-white">
            <a href="#">Customer Service</a>
          </li>
          <li className="border-white">
            <a href="#">Best Sellers</a>
          </li>
          <li className="border-white">
            <a href="#">Amazon Basics</a>
          </li>
          <li className="border-white">
            <a href="#">Today's Deal</a>
          </li>
          <li className="border-white">
            <a href="#">Prime</a>
          </li>
          <li className="border-white">
            <a href="#">New Releases</a>
          </li>
          <li className="border-white">
            <a href="#">Music</a>
          </li>
          <li className="border-white">
            <a href="#">Books</a>
          </li>
          <li className="border-white">
            <a href="#">Registry</a>
          </li>
          <li className="border-white">
            <a href="#">Gift Cards</a>
          </li>
          <li className="border-white">
            <a href="#">Fashion</a>
          </li>
          <li className="border-white">
            <a href="#">Amazon Home</a>
          </li>
          <li className="border-white">
            <a href="#">Toys & Games</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
