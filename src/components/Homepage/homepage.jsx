import { useState } from 'react';
import './homepage.css';

import Header from '../Header/header';
import Navbar from '../Navbar/navbar';
import ItemBox1 from './HomepageComponment/itemBox';
import ItemBox2 from './HomepageComponment/itemBox2';

function HomePage(){

    return(<>
      <Header />
      <Navbar />

      {/* 这个box还能优化，减少代码量，稍后做 */}
      <ItemBox1 />
      <ItemBox2 />

   
    </>)
}

export default HomePage