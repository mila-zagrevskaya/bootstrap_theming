import React from 'react';
import { Element } from 'react-scroll';

import banner from 'assets/images/banner.jpg';
import banner2 from 'assets/images/banner2.jpg';
import banner3 from 'assets/images/banner3.jpg';

export const Banner = () => (
  <Element className="banner element" id="banner" name="banner">
    <div className="banner-overlay">
      <h1 className="title-1">Components Library</h1>
    </div>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item  active" data-bs-interval="7000">
          <img src={banner} className="carousel-img d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="7000">
          <img src={banner2} className="carousel-img d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="7000">
          <img src={banner3} className="carousel-img d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  </Element>
);
