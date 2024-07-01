import React from 'react';

import { AnimatedSwitch } from 'components/VisualEffects/AnimationComponents/AnimatedSwitch.jsx';
import {AnimatedCheckbox } from 'components/VisualEffects/AnimationComponents/AnimatedCheckbox.jsx';
import { AnimatedRadiobutton } from 'components/VisualEffects/AnimationComponents/AnimatedRadiobutton.jsx';
import { AnimatedButton } from 'components/VisualEffects/AnimationComponents/AnimatedButton.jsx';
import { AnimatedClock } from 'components/VisualEffects/AnimationComponents/AnimatedClock/index.jsx';
import { AnimatedFilter } from 'components/VisualEffects/AnimationComponents/AnimatedFilter.jsx';
import { AnimatedTabs } from 'components/VisualEffects/AnimationComponents/AnimatedTabs.jsx';
import { AnimatedSearch } from 'components/VisualEffects/AnimationComponents/AnimatedSearch';
import { AnimatedForm } from 'components/VisualEffects/AnimationComponents/AnimatedForm.jsx';
import { AnimatedIcons } from 'components/VisualEffects/AnimationComponents/AnimatedIcons/index.jsx';
import { AnimatedSlider } from 'components/VisualEffects/AnimationComponents/AnimatedSlider.jsx';
import { AnimatedPlayButton } from 'components/VisualEffects/AnimationComponents/AnimatedPlayButton.jsx';

export const AnimationComponents = () => (
  <div className="animations-components">
    <div className="animations-components-container">
      <AnimatedSwitch />
      <AnimatedCheckbox/>
      <AnimatedRadiobutton/>
      <AnimatedButton/>
      <AnimatedClock/>
      <AnimatedFilter/>
      <AnimatedPlayButton/>
      <AnimatedTabs/>
      <AnimatedSearch/>
      <AnimatedForm/>
      <AnimatedIcons/>
      <AnimatedSlider/>
    </div>
  </div>
);
