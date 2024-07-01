import React from 'react';

import { Switch } from 'components/common/Switch/index.jsx';

export const ToggleButtons = () => (
  <div className="col">
    <h3 className="title-3 section-title">Radio Buttons</h3>
    <Switch
      name="switch"
      id="unchecked-switch"
      inputClassName="switch-button"
      label="Toggle is on"
      value="on"
      checked
    />
    <Switch
      name="switch"
      id="unchecked-switch"
      inputClassName="switch-button"
      label="Toggle is off"
      value="off"
    />
  </div>
);
