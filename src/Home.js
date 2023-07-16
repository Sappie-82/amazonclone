import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
      <img className='home_image' src='https://mcdn.wallpapersafari.com/medium/49/5/kRF6Ku.jpg' alt=''/>  
      <div className='home_row'>
        <Product 
        id='1455'
        title="Visit the MANQ Store,
        MANQ Men's Slim Fit Single Breasted Blazer" 
        price={6000}
        image="http://rb.gy/8fbyna"
        rating={5}
        ></Product>
        <Product
        id='2456'
        title="Boat Airdopes 121V2 Bluetooth Truly Wireless in Ear Earbuds with Upto 14 Hours Playback" 
        price={6000}
        image="https://rb.gy/ynisj2"
        rating={5}
        ></Product>
        <Product
        id='4567'
        title="RedMi Note 10" 
        price={6000}
        image="https://rb.gy/x5uxvw"
        rating={5}
        ></Product>
      </div>
      <div className='home_row'>
        <Product
        id='1223'
        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)" 
        price={20000}
        image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
        rating={5}
        ></Product>
        <Product
        id='3214'
        title="Fire TV Stick 4K with Alexa Voice Remote" 
        price={15000}
        image="https://images-eu.ssl-images-amazon.com/images/I/41McmELG2TL._AC._SR360,460.jpg"
        rating={5}
        ></Product>
      </div>
      <div className='home_row'>
        <Product
        id='4568'
        title="Arika 100 cms (40 inches) HD Ready Smart LED TV" 
        price={15000}
        image="https://m.media-amazon.com/images/I/61kuXpKoIfL._SX679_.jpg"

        rating={5}
        ></Product>
      </div>
    </div>
    
    </div>
  )
}

export default Home