import React from 'react';

import { SliderNavigation } from './SliderNavigation.jsx';
import { GALLERY } from 'constants/gallery';

export const SliderSections = () => (
  <div className="slider-container">
    <SliderNavigation />
    <ul className="slider-sections">
      {GALLERY.map((navItem) => {
        const { title, image, name, description, id } = navItem;

        return (
          <li className="slider-item" key={id} id={id} title={title}>
            <div className="slider-image-container">
              <p className="gallery-item-title">{description}</p>
              <img src={image} alt={name} className="slider-item-image" />
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);
