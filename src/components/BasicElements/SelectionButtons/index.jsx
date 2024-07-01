import React from 'react';

import { Checkboxes } from 'components/BasicElements/SelectionButtons/Checkboxes/index.jsx';
import { RadioButtons } from 'components/BasicElements/SelectionButtons/RadioButtons/index.jsx';
import { ToggleButtons } from 'components/BasicElements/SelectionButtons/ToggleButtons/index.jsx';

export const SelectionButtons = () => (
  <div className="part section element" id="selection-buttons" >
    <div className="row">
      <Checkboxes/>
      <RadioButtons/>
      <ToggleButtons/>
    </div>
  </div>
);
