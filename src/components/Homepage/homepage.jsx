import { useState } from "react";
import "./homepage.css";

import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import ItemBox1 from "./HomepageComponment/itemBox";
import ItemBox2 from "./HomepageComponment/itemBox2";
import Carousel from "../Carousel/carousel";
import Footer from "../Footer/footer";
import CarouselBar from "./HomepageComponment/carouselBar";

function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <div className="main">
         {/* 这个box还能优化，减少代码量，稍后做 */}
        <ItemBox1 />
        <ItemBox2 />
        <CarouselBar />
      </div>
     
      <Footer />
    </>
  );
}

export default HomePage;
