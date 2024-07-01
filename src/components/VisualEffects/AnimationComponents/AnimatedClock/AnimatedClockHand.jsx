/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export const AnimatedClockHand = (props) => {
  const { clockHand } = props;
  const [handStyle, rotateHand] = useState('');
  useEffect(() => {
    const rotation = (val) => {
      rotateHand (`rotate(${val}deg)`);
    }

    const clock = () => {
      let today = new Date();
      // let h;
      // let m;
      // let s;
      
      if(clockHand === 'hours'){
        let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
        h *= 30; // 12 * 30 = 360deg
        rotation(h);
      } else if (clockHand === 'minutes') {
        let m = today.getMinutes(); // 0 - 59
        m *= 6;
        rotation(m);
      } else if (clockHand === 'seconds') {
        let s = today.getSeconds(); // 0 - 59
        s *= 6; // 60 * 6 = 360deg
        rotation(s);
      }

      // switch (clockHand) {
      //   case 'hours':
      //     h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
      //     h *= 30; // 12 * 30 = 360deg
      //     rotation(h);
      //     break;
      //   case 'minutes':
      //     m = today.getMinutes(); // 0 - 59
      //     m *= 6;
      //     rotation(m);
      //     break;
      //   case 'seconds':
      //     s = today.getSeconds(); // 0 - 59
      //     s *= 6; // 60 * 6 = 360deg
      //     rotation(s);
      //     break;
      //   default:
      //     break;
      // }
    
      // call every second
      setTimeout(clock, 500);
    }
    clock();
  });

  return (
    <div className={`animated-clock-hand animated-clock-${clockHand}`} style={{transform: handStyle}}></div>
)};
