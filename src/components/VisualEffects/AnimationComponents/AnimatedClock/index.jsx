import React from 'react';

import { AnimatedClockHand } from 'components/VisualEffects/AnimationComponents/AnimatedClock/AnimatedClockHand';

export const AnimatedClock = () => (
  <div className="animated-clock">
    <AnimatedClockHand clockHand='hours'/>
    <AnimatedClockHand clockHand='minutes'/>
    <AnimatedClockHand clockHand='seconds'/>
     <div className="animated-clock-point"></div>
      <div className="animated-clock-marker">
        <span className="animated-clock-marker-1"></span>
        <span className="animated-clock-marker-2"></span>
        <span className="animated-clock-marker-3"></span>
        <span className="animated-clock-marker-4"></span>
      </div>
  </div>
);
