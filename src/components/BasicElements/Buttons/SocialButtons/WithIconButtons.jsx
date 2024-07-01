import React from 'react';

import { Button } from 'components/common/Button/index.jsx';

export const WithIconButtons = () => (
  <div className="col">
    <div>
      <Button
        className="btn btn-twitter text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={
          <>
            <i className="bi bi-twitter" style={{ fontSize: '1.1rem' }}></i>
            <span> Connect with twitter</span>
          </>
        }
      />
    </div>

    <div>
      <Button
        className="btn btn-facebook text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={
          <>
            <i className="bi bi-facebook" style={{ fontSize: '1.1rem' }}></i>
            <span> Share · 2.2k</span>
          </>
        }
      />
    </div>

    <div>
      <Button
        className="btn btn-instagram text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={
          <>
            <i className="bi bi-instagram" style={{ fontSize: '1.1rem' }}></i>
            <span> Follow on instagram</span>
          </>
        }
      />
    </div>

    <div>
      <Button
        className="btn btn-youtube text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={
          <>
            <i className="bi bi-youtube" style={{ fontSize: '1.1rem' }}></i>
            <span> View on youtube</span>
          </>
        }
      />
    </div>

    <div>
      <Button
        className="btn btn-linkedin text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={
          <>
            <i className="bi bi-linkedin" style={{ fontSize: '1.1rem' }}></i>
            <span> Connect with linkedin</span>
          </>
        }
      />
    </div>

  </div>
);
