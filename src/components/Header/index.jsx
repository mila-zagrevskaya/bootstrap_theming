import React from 'react';
import { Link } from 'react-scroll';

import { Navigation } from 'components/common/Navigation/index.jsx';
import { SwitchTheme } from 'components/common/SwitchTheme/index.jsx';

import logo from 'assets/images/logo.png';

export const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="logo">
        <Link activeClass="active" className="navbar-brand" to="banner" spy={true} smooth={true} duration={100}>
          <img src={logo} alt="" width="100"/>
        </Link>
      </div>
      <div className="header-content gx-5">
        <Navigation hasSearch = {true}/>
        <SwitchTheme/>
      </div>
    </div>
  </header>
);
