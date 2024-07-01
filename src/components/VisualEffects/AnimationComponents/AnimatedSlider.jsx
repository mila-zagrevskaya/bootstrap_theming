import React, { useState, useEffect } from 'react';

export const AnimatedSlider = () => {
  const [buttonPosition, setButtonPosition] = useState('');
  const [colorLineWidth, setColorLineWidth] = useState('');
  const [percentPosition, setPercentPosition] = useState('');
  const [tooltipStyle, setTooltipStyle] = useState({
    opacity: 0,
    left: 0,
  });

  useEffect(() => {
    const container = document.querySelector('.animated-slider-box');
    const btn = document.querySelector('.animated-slider-btn');

    const dragElement = (target) => {
      const onMouseMove = (e) => {
        e.preventDefault();
        let targetRect = target.getBoundingClientRect();
        let x = e.pageX - targetRect.left + 10;
        if (x > targetRect.width) {
          x = targetRect.width;
        }
        if (x < 0) {
          x = 0;
        }
        btn.x = x - 10;

        setButtonPosition(btn.x);

        // get the position of the button inside the container (%)
        let persent = Math.round(((btn.x + 10) / targetRect.width) * 100);
        setPercentPosition(persent);

        // color width = position of button (%)
        setColorLineWidth(persent);

        // move the tooltip when button moves, and show the tooltip
        setTooltipStyle((prevState) => ({ ...prevState, opacity: 1, left: (btn.x) - 5 + 'px' }));
      };

      const onMouseUp = (e) => {
        window.removeEventListener('mousemove', onMouseMove);
        setTooltipStyle((prevState) => ({ ...prevState, opacity: 0 }));

        btn.addEventListener('mouseover', function () {
          setTooltipStyle((prevState) => ({ ...prevState, opacity: 1 }));
        });

        btn.addEventListener('mouseout', function () {
          setTooltipStyle((prevState) => ({ ...prevState, opacity: 0 }));
        });
      };

      target.addEventListener('mousedown', (e) => {
        onMouseMove(e);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
    };

    container && dragElement(container);
  }, [percentPosition]);

  return (
    <div className="animated-slider">
      <div className="animated-slider-box">
        <span className="animated-slider-btn" id="find" style={{ left: `${buttonPosition}px` }}></span>
        <span className="animated-slider-color" style={{ width: `${colorLineWidth}%` }}></span>
        <span className="animated-slider-tooltip" style={{ opacity: tooltipStyle.opacity, left: tooltipStyle.left }}>
          {percentPosition}%
        </span>
      </div>
    </div>
  );
};
