import React from 'react';

import { Button } from 'components/common/Button/index.jsx';

export const OnlyIcon = () => (
  <div className="col">
    <div>
      <Button
        className="btn text-twitter text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={
          <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
        }
      />
    </div>

    <div>
      <Button
        className="btn text-facebook text-nowrap me-2 text-uppercase"
        type="button"
        content={
          <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
        }
      />
    </div>

    <div>
      <Button
        className="btn text-instagram text-nowrap me-2 text-uppercase"
        type="button"
        content={
          <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
        }
      />
    </div>

    <div>
      <Button
        className="btn text-youtube text-nowrap me-2 text-uppercase"
        type="button"
        content={ <i className="bi bi-youtube" style={{ fontSize: '1.6rem' }}></i> }
      />
    </div>

    <div>
      <Button
        className="btn text-linkedin text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={ <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i> }
      />
    </div>

  </div>
);
