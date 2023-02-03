import React from "react";
import "./navbar.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SideBar from "./SideBar/sideBar";

export default function Navbar() {
  const [displaySideBar, setDisplaySideBar] = useState(false);

  const handleSideBar = () => {
    setDisplaySideBar(!displaySideBar);
  };

  return (
    <div className="nav-main">
      <div className="container-nav">
        <ul>
          <li className="border-white" onClick={handleSideBar}>
            <span className="open-nav-slider">
              <svg class="hamburger-menu-icon" viewBox="0 0 100 100">
                <rect class="bar1" x="0" y="0" width="100" height="15" />
                <rect class="bar2" x="0" y="35" width="100" height="15" />
                <rect class="bar3" x="0" y="70" width="100" height="15" />
              </svg>
              All
            </span>
          </li>

          <div className="sidebar-container">
            {/* 尝试插入offvanvas侧边栏 using React*/}
            <Offcanvas show={displaySideBar} onHide={handleSideBar}>
              <Offcanvas.Header className="sidebar-header">
                <Offcanvas.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                    className="profile-icon"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <span>Hello, sign in</span>
                </Offcanvas.Title>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvasDark"
                  aria-label="Close"
                  onClick={handleSideBar}
                ></button>
                {/* Notice: close button 要写在header里title外 */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div>
                  <div className="sidebar-title">Trending</div>
                  <div className="sidebar-content">Best Sellers</div>
                  <div className="sidebar-content">New Releases</div>
                  <div className="sidebar-content">Movers & Shakers</div>
                </div>

                <div className="line"></div>

                <div>
                  <div className="sidebar-title">Digital Content & Devices</div>
                  <div className="sidebar-content">
                    Prime Video
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Amazon Music
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Echo & Alexa
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Fire Tablets
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Fire TV
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Kindle E-readers & Books
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Audible Books & Orignals
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Amazon Photos
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Amazon Appstore
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="line"></div>

                <div>
                  <div className="sidebar-title">Shop By Department</div>
                  <div className="sidebar-content">
                    PClothing, Shoes, Jewelry & Watches
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Amazon Fresh
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Books
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    Movies, Music & Games
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="sidebar-content">
                    See All
                    <div className="arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="line"></div>

                <div>
                  <div className="sidebar-title">Programs & Features</div>
                  <div className="sidebar-content">Whole Foods Market</div>
                  <div className="sidebar-content">Pharmacy</div>
                  <div className="sidebar-content">Clinc</div>
                  <div className="sidebar-content">See All</div>
                </div>

                <div className="line"></div>

                <div>
                  <div className="sidebar-title">Help & Settings</div>
                  <div className="sidebar-content">Your Account</div>
                  <div className="sidebar-content">English</div>
                  <div className="sidebar-content">United States</div>
                  <div className="sidebar-content">Sign In</div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            {/* <SideBar displaySideBar handleSideBar={handleSideBar} /> */}
            {/* Q: 无法把side bar作为一个组建独立出来，，，独立初来就识别不了onHide了不知道为什么 */}
          </div>

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
  );
}
