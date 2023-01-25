import { useState } from 'react';
import './homepage.css';

import Header from '../Header/header';
import Navbar from '../Navbar/navbar';
import ItemBox1 from './HomepageComponment/itemBox';

function HomePage(){

    return(<>
      <Header />
      <Navbar />
      <ItemBox1 />
   
    </>)
}

export default HomePage