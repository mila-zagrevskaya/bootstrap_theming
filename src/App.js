import React from 'react';

import { Header } from 'components/Header/index.jsx';
import { Banner } from 'components/Banner/index.jsx';
import { Main } from 'components/Main/index.jsx';

const App = () => (
  <div className="page-container">
    <Header/>
    <Banner/>
    <Main/>
  </div>
);

export default App;
