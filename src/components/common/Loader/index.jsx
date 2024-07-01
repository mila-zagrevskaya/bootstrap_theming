/* eslint-disable react/prop-types */
import React from 'react';

import loader from 'assets/images/loader.gif';

export const Loader = ({ flag, children }) => (
  flag ?
    <div className="loader">
      <img className="loader-img" src={loader}/>
    </div> : children
);
