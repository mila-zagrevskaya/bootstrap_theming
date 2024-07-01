import React, { useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/index';

// import { DynamicTooltips } from 'components/DynamicTooltips/index.jsx';
import { Loader } from 'components/common/Loader/index.jsx';

export const MasonryCard = observer((card) => {
  const {
    strDrink, strDrinkThumb, idDrink,
  } = card.card;

  const cardData = {
    id: idDrink,
    name: strDrink,
    image: strDrinkThumb
  };

  const {
    tooltipStore: { toggleTooltip, elementParams, setElementParams },
    photoGalleryStore: { isLoading },
  } = useStore();

  useLayoutEffect(() => {
    setElementParams(elementParams);
    clearTimeout();
  }, [elementParams]);

  const showTooltip = (event) => {
    const cardParams = {
      height: event.target.offsetHeight,
      width: event.target.offsetWidth,
      top: event.screenY,
      left: event.screenX,
    }
    setElementParams(cardParams);

    setTimeout(() => {
      toggleTooltip(true);
    }, 1000);
  };
  const hideTooltip = () => {
    toggleTooltip(false);
  };

  return (
    <Loader flag={isLoading}>
      <div className="masonry-card show-tooltips" key={cardData.id}
        onMouseOver={(event) => showTooltip(event)}
        onMouseLeave={hideTooltip}>
          <div className="masonry-card-container">
            <span className="masonry-card-title">{cardData.name}</span>
            <img src={cardData.image} alt={cardData.name} className="masonry-card-image"
            />
          </div>
      </div>
      {/* {isShowTooltip && (<DynamicTooltips content={cardData.name} cardSize={elementParams}/>)} */}
    </Loader>
  );
});
