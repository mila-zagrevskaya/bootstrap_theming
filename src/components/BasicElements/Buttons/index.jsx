import React from 'react';

import { SimpleButtons } from './SimpleButtons/index.jsx';
import { SocialButtons } from './SocialButtons/index.jsx';

export const Buttons = () => (
  <div className="part element" id="basic-elements">
    <SimpleButtons/>
    <SocialButtons/>
  </div>
);
