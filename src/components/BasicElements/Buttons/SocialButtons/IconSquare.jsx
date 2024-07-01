import React from 'react';

import { Button } from 'components/common/Button/index.jsx';

export const IconSquare = () => (
  <div className="col ">
    <div>
      <Button
        className="btn btn-twitter text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={ <i className="bi bi-twitter" style={{ fontSize: '1.1rem' }}></i> }
      />
    </div>

    <div>
      <Button
        className="btn btn-facebook text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={ <i className="bi bi-facebook" style={{ fontSize: '1.1rem' }}></i> }
      />
    </div>

    <div>
      <Button
        className="btn btn-instagram text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={ <i className="bi bi-instagram" style={{ fontSize: '1.1rem' }}></i> }
      />
    </div>

    <div>
      <Button
        className="btn btn-youtube text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={ <i className="bi bi-youtube" style={{ fontSize: '1.1rem' }}></i> }
      />
    </div>

    <div>
      <Button
        className="btn btn-linkedin text-nowrap me-2 mb-2 text-uppercase"
        type="button"
        content={ <i className="bi bi-linkedin" style={{ fontSize: '1.1rem' }}></i> }
      />
    </div>

  </div>
);
