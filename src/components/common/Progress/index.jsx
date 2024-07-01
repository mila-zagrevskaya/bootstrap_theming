/* eslint-disable react/prop-types */
import React from 'react';

export const Progress = ({ label, progressBarClassName, valuenow }) => {
  const progressBarClass = progressBarClassName
    ? `progress-bar ${progressBarClassName}`
    : 'progress-bar';
  return (
  <div className="progress-box">
    <p className="progress-label">{label}</p>
    <div className="progress">
      <div
      className={ progressBarClass }
        role="progressbar" style={{ maxWidth: `${valuenow}%` }}
        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
  </div>
  );
};
