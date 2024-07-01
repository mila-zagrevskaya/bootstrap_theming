import React from 'react';

import { Input } from 'components/common/Input/index.jsx';

export const Inputs = () => (
  <div className="part section element" id="inputs" >
    <h3 className="title-3 section-title">Inputs</h3>
    <div className="row">
      <div className="col-3">
        <Input
        isFloating={false}
        id="regular"
        placeholder="regular"/>
      </div>
      <div className="col-3">
        <Input
          isFloating={true}
          id="floatingInput"
          placeholder="With floating label"
          label="With floating label"/>
      </div>
      <div className="col-3">
        <Input
          isFloating={true}
          id="floatingInputValid"
          inputClassName="is-valid"
          placeholder="Success input"
          label="Success input"/>
      </div>
      <div className="col-3">
      <Input
          isFloating={true}
          id="floatingInputInvalid"
          inputClassName="is-invalid"
          placeholder="Error input"
          label="Error input"/>
      </div>
    </div>
  </div>
);
