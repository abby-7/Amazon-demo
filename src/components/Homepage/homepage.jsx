import { useState } from "react";
import "./homepage.css";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import ItemBox1 from "./HomepageComponment/itemBox";
import ItemBox2 from "./HomepageComponment/itemBox2";
import Carousel from "../Carousel/carousel";
import Footer from "../Footer/footer";
import CarouselBar from "./HomepageComponment/carouselBar";
import BestSellers from "../BestSeller/bestSellers";

function HomePage() {
  const Test = () => {
    return (
      <div className="homepage-main-body">
        <Carousel />
        <div className="main">
          {/* 这个box还能优化，减少代码量，稍后做 */}
          <ItemBox1 />
          <ItemBox2 />
          <CarouselBar />
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/" element={<Test />} />
      </Routes>

      <Footer />
    </>
  );
}

export default HomePage;
