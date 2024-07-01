/* eslint-disable react/prop-types */
import React from 'react';

import { MenuBar } from 'components/common/MenuBar/index.jsx';
import { Search } from 'components/common/Search/index.jsx';

export const Navigation = ({ hasSearch }) => (
  <div className="navigation">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MenuBar isTitleShow={true}/>
          { hasSearch
            && <Search/>
          }
        </div>
      </div>
    </nav>
  </div>
);
