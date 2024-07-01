import React from 'react';

export const AnimatedRadiobutton = () => (
  <div className="animated-radiobutton">
    <div className="radio-1">
      <input className="animated-radio-control" id="radio-1" type="radio" name="animated-radio" value="1" />
      <label className="animated-radio-label" htmlFor="radio-1"></label>
    </div>

    <div className="radio-2">
      <input
        className="animated-radio-control"
        id="radio-2"
        type="radio"
        name="animated-radio"
        value="2"
        defaultChecked
      />
      <label className="animated-radio-label" htmlFor="radio-2"></label>
    </div>
  </div>
);
