import "./sideBar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";

// 问题：无法识别onHide等属性

export default function SideBar(displaySideBar, handleSideBar) {
  //   const [displaySideBar, setDisplaySideBar] = useState(false);
  //   const handleSideBar = () => {
  //     setDisplaySideBar(!displaySideBar);
  //     console.log(displaySideBar);
  //   };
  return (
    <>
      //{" "}
      <Offcanvas show={displaySideBar} onHide={handleSideBar}>
        <Offcanvas.Header closeButton className="sidebar-header">
          {/* 关闭按钮和官网有所不同 */}
          <Offcanvas.Title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            Hello, sign in
            {/* <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvasDark"
            aria-label="Close"
          ></button> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <li>
            <ul>Trending</ul>
            <ul>Best Sellers</ul>
          </li>
          <hr />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
