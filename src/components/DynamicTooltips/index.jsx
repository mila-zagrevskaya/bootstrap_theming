import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/index';

export const DynamicTooltips = observer((parameters) => {
  const { content, cardSize } = parameters;

  const {
    tooltipStore: { setTooltipParams },
  } = useStore();

  const documentWidth = window.innerWidth;
  const documentHeight = window.innerHeight;
  const elementHeight = cardSize ? cardSize.height : 0;

  const offsetWidth = 10;
  const offsetHeight = 10;
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  const [topPoint, setTopPoint] = useState(0);
  const [leftPoint, setLeftPoint] = useState(0);
  const tooltipStyle = {
    top: topPoint,
    left: leftPoint,
    display: 'none',
  };

  const calculateTooltipPosition = (card) => {
    setTooltipWidth(card.left);
    setTooltipHeight(card.top);
    if (card) {
      setTopPoint(card.top);
      setLeftPoint(card.left + offsetWidth);
      if (topPoint + tooltipHeight > documentHeight) {
        setTopPoint(documentHeight - tooltipHeight - offsetHeight - (2 * elementHeight));
      }
      if (leftPoint + tooltipWidth > documentWidth) {
        setLeftPoint(documentWidth - tooltipWidth - (2 * offsetWidth));
      }
    }
  };

  useEffect(() => {
    calculateTooltipPosition(cardSize);
    setTooltipParams(tooltipStyle)
  }, []);

  return (
    <div id="tooltip-container" className="tooltip-container"
      style={tooltipStyle}>
        <div className = "tooltip-arrow"></div>
        <div className = "tooltip-label" > {content} </div>
    </div>
  );
});
