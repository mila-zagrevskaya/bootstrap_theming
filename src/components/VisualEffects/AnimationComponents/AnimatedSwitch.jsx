import React from 'react';

export const AnimatedSwitch = () => (
  <div className="animated-switch">        
    <div className="switch-1">
      <input className="animated-switch-control" id="switch-1" type="checkbox" onChange={() => {}}/>
      <label className="animated-switch-label" htmlFor="switch-1"></label>
    </div>

    <div className="switch-2">
      <input className="animated-switch-control" id="switch-2" type="checkbox" defaultChecked onChange={() => {}}/>
      <label className="animated-switch-label" htmlFor="switch-2"></label>
    </div>
  </div>
);
