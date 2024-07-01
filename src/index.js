import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { rootStore, StoreProvider } from 'store/index';
import { Router } from './Router';

import './scss/all.scss';

ReactDOM.render(
  <StoreProvider value={rootStore}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
