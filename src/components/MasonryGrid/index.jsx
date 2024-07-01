import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';

import { MasonryCard } from 'components/common/MasonryCard/index.jsx';

export const MasonryGrid = observer(() => {
  const {
    photoGalleryStore: { photos },
  } = useStore();

  return (
    <section className="section container" id="masonry-grid">
      <h2 className="title-2">Masonry Grid with Dynamic tooltips</h2>
      <div className="masonry-grid">
        {photos.map((card, index) => (
          <MasonryCard key={index} card={card} />
        ))}
      </div>
    </section>
)});
