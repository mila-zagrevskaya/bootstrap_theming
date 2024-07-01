import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';

export const Router = () => (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
);
