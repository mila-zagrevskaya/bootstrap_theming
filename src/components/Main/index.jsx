import React from 'react';

import { MenuBar } from 'components/common/MenuBar/index.jsx';
import { BasicElements } from 'components/BasicElements/index.jsx';
import { Notifications } from 'components/Notifications/index.jsx';
import { MasonryGrid } from 'components/MasonryGrid/index.jsx';
// import { DynamicTooltips } from 'components/DynamicTooltips/index.jsx';
import { TablesWithStickyRows } from 'components/TablesWithStickyRows/index.jsx';
import { VisualEffects } from 'components/VisualEffects/index.jsx';
import { VerticalSlider } from 'components/VerticalSlider/index.jsx';
import { InfinityGallerySection } from 'components/InfinityGallery/index.jsx';

export const Main = () => (
  <main className="main">
    <nav className="aside-navigation">
      <MenuBar isTitleShow={false}/>
    </nav>
    <BasicElements/>
    <Notifications/>
    <VisualEffects/>
    <VerticalSlider/>
    <TablesWithStickyRows/>
    <MasonryGrid/>
     {/* <DynamicTooltips/> */}
    <InfinityGallerySection/>
  </main>
);
