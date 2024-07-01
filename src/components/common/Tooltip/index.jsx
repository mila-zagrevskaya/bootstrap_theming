import React from 'react';

export const Tooltip = (parameters) => {
  const { id, position, content } = parameters;
  const tooltipClassName = `tooltip-container ${position}`;
  return (
    <div id={id} className={tooltipClassName}>
        <div className = "tooltip-arrow"></div>
        <div className = "tooltip-label" > {content} </div>
    </div>
  );
};
