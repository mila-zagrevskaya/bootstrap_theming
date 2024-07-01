import React from 'react';

import { Button } from 'components/common/Button/index.jsx';

export const SimpleButtons = () => (
  <div>
    <h3 className="title-3">Buttons</h3>

    <div className="buttons-group">
      <h5 className="title-5 buttons-group-title">Pick your style</h5>
      <div className="row justify-content-center">
        <div className="col-9 align-self-center me-2">
          <Button content="Default" type="button" className="btn btn-primary btn-text-color me-2 text-uppercase"/>
          <Button content="round" type="button" className="btn btn-primary btn-round text-nowrap me-2
            btn-text-color text-uppercase"/>
          <Button className="btn btn-primary btn-round btn-text-color text-nowrap me-2 text-uppercase" type="button"
            content={<>
            <i className="bi bi-heart-fill" style={{ fontSize: '1.1rem' }}></i>
            <span> with icon</span></>}
          />
          <Button className="btn btn-primary btn-circle btn-text-color text-nowrap me-2 text-uppercase" type="button"
            content={ <i className="bi bi-heart-fill" style={{ fontSize: '1.1rem' }}></i> }
          />
          <Button className="btn btn-link button-link text-nowrap me-2 text-uppercase" type="button"
            content="simple"
          />
        </div>
      </div>
    </div>

    <div className="buttons-group">
      <h5 className="title-5 buttons-group-title">Pick your size</h5>
      <div className="row justify-content-center">
        <div className="col-9 align-self-center me-2">
          <Button content="Small" type="button" className="btn btn-primary btn-sm me-2 btn-text-color text-uppercase"/>
          <Button content="Regular" type="button"
            className="btn btn-primary me-2 text-uppercase"/>
          <Button content="Large" type="button" className="btn btn-primary btn-lg me-2 btn-text-color text-uppercase"/>
        </div>
      </div>
    </div>

    <div className="buttons-group">
      <h5 className="title-5 buttons-group-title">Pick your color</h5>
      <div className="row justify-content-center">
        <div className="col-9 align-self-center me-2">
          <Button content="Default" type="button" className="btn btn-default me-2 btn-text-color text-uppercase"/>
          <Button content="Primary" type="button"
            className="btn btn-primary me-2 text-uppercase"/>
          <Button content="Info" type="button" className="btn btn-info me-2 btn-text-color text-uppercase"/>
          <Button content="Success" type="button" className="btn btn-success me-2 btn-text-color text-uppercase"/>
          <Button content="Warning" type="button" className="btn btn-warning me-2 btn-text-color text-uppercase"/>
          <Button content="Danger" type="button" className="btn btn-danger me-2 text-uppercase"/>
        </div>
      </div>
    </div>

  </div>
);
