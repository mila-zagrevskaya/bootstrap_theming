import React from 'react';

import { WithIconButtons } from 'components/BasicElements/Buttons/SocialButtons/WithIconButtons.jsx';
import { IconSquare } from 'components/BasicElements/Buttons/SocialButtons/IconSquare.jsx';
import { IconCircle } from 'components/BasicElements/Buttons/SocialButtons/IconCircle.jsx';
import { OnlyIcon } from 'components/BasicElements/Buttons/SocialButtons/OnlyIcon.jsx';
import { LinkButtons } from 'components/BasicElements/Buttons/SocialButtons/LinkButtons.jsx';

export const SocialButtons = () => (
  <div className="part">
    <h3 className="title-3">Social Buttons</h3>
    <div className="buttons-group row">
      <div className="col">
        <h5 className="title-5 buttons-group-title">Default</h5>
      </div>
      <div className="col">
        <h5 className=" title-5 buttons-group-title">Simple</h5>
      </div>

        <div className="row justify-content-start">

        <div className="col">
          <WithIconButtons/>
        </div>
        <div className="col">
          <IconSquare/>
        </div>
          <IconCircle/>
          <OnlyIcon/>
          <LinkButtons/>
        <div className="col">
        </div>
        </div>
    </div>
  </div>
);
