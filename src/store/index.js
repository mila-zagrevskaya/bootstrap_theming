import { createContext, useContext } from 'react';

import { TooltipStore } from './TooltipStore';
import { PhotoGalleryStore } from './PhotoGalleryStore';

class MainStore {
  constructor() {
    this.tooltipStore = new TooltipStore();
    this.photoGalleryStore = new PhotoGalleryStore();
  }
}

export const rootStore = new MainStore();
const StoreContext = createContext();
export const StoreProvider = StoreContext.Provider;

export const useStore = () => useContext(StoreContext);
