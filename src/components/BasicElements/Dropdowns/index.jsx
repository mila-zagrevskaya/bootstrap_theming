import React from 'react';

import { Dropdown } from 'components/common/Dropdown/index.jsx';
import { DataList } from 'components/common/DataList/index.jsx';

import { CITIES } from 'constants/exampleArray.js';

const secondaryDropMenu = [
  { id: 1, text: 'Separated link' },
  { id: 2, text: 'One more separated link' },
  { id: 3, text: 'Something else here' },
];

export const Dropdowns = () => (
  <div className="part section element" id="selection-buttons">
    <div className="row">
      <h3 className="title-3 section-title">Dropdowns</h3>
      <div className="col row">
        <div className="col-3">
          <Dropdown label="Dropdown"/>
        </div>
        <div className="col-3">
          <Dropdown label="Multilevel Dropdown" hasSeparated={true} secondaryDropMenu={secondaryDropMenu}/>
        </div>
      </div>
    </div>

    <div className="section">
      <h3 className="title-3 section-title">Data List</h3>
      <div className="row col-6">
        <DataList label="Select" id="example1" options={CITIES}/>
      </div>
    </div>
  </div>
);
