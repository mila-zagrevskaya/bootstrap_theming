import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';

import { Loader } from 'components/common/Loader/index.jsx';

export const InfinityGallery = observer(() => {
  const {
    photoGalleryStore: { isLoading, currentDisplayedItems, loadPhotos, loadMore },
  } = useStore();

  useEffect(() => {
    loadPhotos();

    window.addEventListener('scroll', function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadMore();
      }
    });

    window.removeEventListener('scroll', function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadMore();
      }
    });
  }, [currentDisplayedItems]);

  return (
    <Loader flag={isLoading}>
      <>
        {currentDisplayedItems.map((photo, index) => {
          return (
            <div className="gallery-item" key={`${photo.idDrink}-${index}`}>
              <p className="gallery-item-title">{photo.strDrink}</p>
              <img src={photo.strDrinkThumb} alt={photo.idDrink} className="gallery-img" />
            </div>
          );
        })}
      </>
    </Loader>
  );
});
