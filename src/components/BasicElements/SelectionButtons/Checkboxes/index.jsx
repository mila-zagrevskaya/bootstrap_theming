import React from 'react';

import { Checkbox } from 'components/common/Checkbox/index.jsx';

export const Checkboxes = () => (
  <div className="col">
    <h3 className="title-3 section-title">Checkboxes</h3>
    <Checkbox name="checkboxes" id="unchecked-checkbox" label="Unchecked" labelClassName="inactive-check" />
    <Checkbox name="checkboxes" id="checked-checkbox" label="Checked" checked={true} />
    <Checkbox
      name="checkboxes"
      id="disabled-check"
      label="Disabled Unchecked"
      labelClassName="disabled-check-label"
      checkboxGroupClassName="disabled-check"
      checked={false}
      disabled
    />
    <Checkbox
      name="checkboxes"
      id="dis-selected-check"
      label="Disabled Checked"
      labelClassName="disabled-check-label"
      checkboxGroupClassName="disabled-check dis-selected-check"
      checked={true}
      disabled
    />
  </div>
);
