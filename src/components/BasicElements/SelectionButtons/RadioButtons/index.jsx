import React from 'react';

import { Radio } from 'components/common/Radio/index.jsx';

export const RadioButtons = () => (
  <div className="col">
    <h3 className="title-3 section-title">Radio Buttons</h3>
    <Radio
      name="radio"
      id="unchecked-radio"
      inputClassName="radio-button"
      label="First Radio"
      labelClassName="inactive-radio"
      value="First Radio"
    />
    <Radio
      name="radio"
      id="checked-radio"
      inputClassName="radio-button"
      label="Second Radio"
      labelClassName="selected-radio"
      value="Second Radio"
      disabled={false}
      checked={true}
    />
    <Radio
      name="dis-radio"
      id="disabled-radio"
      inputClassName="radio-button"
      label="Disabled Unchecked Radio"
      labelClassName="disabled-radio-label"
      radioGroupClassName="disabled-radio"
      value="Disabled Unchecked Radio"
      checked={false}
      disabled={true}
    />
    <Radio
      name="dis-radio"
      id="dis-selected-radio"
      label="Disabled Checked Radio"
      labelClassName="dis-selected-radio-label"
      radioGroupClassName="dis-selected-radio"
      value="Disabled Checked Radio"
      disabled={true}
      checked={true}
    />
  </div>
);
