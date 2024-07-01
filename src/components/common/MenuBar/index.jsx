/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-scroll';

import { HEADER_NAVIGATION } from 'constants/navigation.js';

export const MenuBar = ({ isTitleShow }) => (
  <ul className="menu navbar-nav me-auto mb-2 mb-lg-0">
    {HEADER_NAVIGATION.map((navItem) => {
      const {
        title, path, isActive, id,
      } = navItem;
      const linkClassName = isActive ? 'nav-link active' : 'nav-link';
      const content = isTitleShow ? title : null;
      return (
        <li className="nav-item" key={id} title={title}>
          <Link
            activeClass="active"
            spy={false}
            smooth={true}
            duration={100}
            className={linkClassName}
            aria-current="page"
            // tooltip={title}
            to={path}
          >
            {content}
          </Link>
        </li>
      );
    })}
  </ul>
);
