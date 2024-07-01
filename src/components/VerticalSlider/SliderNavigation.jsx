/* eslint-disable react/prop-types */
import React from 'react';

import { GALLERY } from 'constants/gallery';

export const SliderNavigation = () => (
  <ul className="slider-navigation">
    {GALLERY.map((navItem) => {
      const {
        title, isActive, id,
      } = navItem;
      const linkClassName = isActive ? 'slider-nav-link active' : 'slider-nav-link';
      return (
        <li className="slider-nav-item" key={id} title={title}>
          <a
            className={linkClassName}
            href={`#${id}`}
          >
          </a>
        </li>
      );
    })}
  </ul>
);
