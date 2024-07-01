import React from 'react';

import { Progress } from 'components/common/Progress/index.jsx';

export const ProgressBar = () => (
  <div className="col">
    <h3 className="title-3 section-title">Progress Bars</h3>
    <Progress label="25%" valuenow="25" />
    <Progress label="75%" valuenow="75" progressBarClassName="progress-bar-striped progress-bar-animated" />
    <div className="progress-box">
      <p className="progress-label">65%</p>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ maxWidth: '60%' }}
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ maxWidth: '45%' }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ maxWidth: '20%' }}
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
);
