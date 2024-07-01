import React from 'react';

export const AnimatedTabs = () => (
  <div className="animated-tabs">
    <input type="radio" className="animated-tabs-control" name="animated-radio2" value="3" id="tab-1" defaultChecked />
    <label htmlFor="tab-1" className="animated-tabs-label">
      <p className="animated-tabs-text">Tab 1</p>
    </label>

    <input type="radio" className="animated-tabs-control" name="animated-radio2" value="4" id="tab-2" />
    <label htmlFor="tab-2" className="animated-tabs-label">
      <p className="animated-tabs-text">Tab 2</p>
    </label>

    <input type="radio" className="animated-tabs-control" name="animated-radio2" value="5" id="tab-3" />
    <label htmlFor="tab-3" className="animated-tabs-label">
      <p className="animated-tabs-text">Tab 3</p>
    </label>

    <div className="animated-tabs-color"></div>
  </div>
);
