import React, { useState } from 'react';

export const AnimatedPlayButton = () => {
  const [isVisible, toggleVisible ]= useState(false);
  const [hasShadow, toggleShadow] = useState(true);
  const [isPaused, togglePaused] = useState(false);

  const animatedPlayButtonClass = hasShadow ? 'animated-play-btn shadow' : 'animated-play-btn';
  const pauseButtonClass = isVisible ? 'pause visibility' : 'pause';
  const playButtonClass = isVisible ? 'play visibility' : 'play';
  const playBack1 = isPaused ? 'animated-play-back-1 paused' : 'animated-play-back-1';
  const playBack2 = isPaused ? 'animated-play-back-2 paused' : 'animated-play-back-2';

  const togglePlayButton = () => {
    toggleVisible(!isVisible);
    toggleShadow(!hasShadow);
    togglePaused(!isPaused);
  };

  return (
    <div className="animated-play">
      <span className={animatedPlayButtonClass} onClick={togglePlayButton}>
        <svg className={pauseButtonClass} id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="35px" height="35px">
          <g>
            <rect height="320" width="79" x="128" y="96"/><rect height="320" width="79" x="305" y="96"/>
          </g>
        </svg>
        <svg className={playButtonClass} id="Layer_1" version="1.1" viewBox="0 0 512 512" width="35px" height="35px">
          <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"/>
        </svg>
      </span>
      <span className={playBack1}></span>
      <span className={playBack2}></span>
    </div>
  );
};
