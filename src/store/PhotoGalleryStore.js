import { makeObservable, observable, action } from 'mobx';
import fetch from 'node-fetch';

import { RANDOM_SELECTION } from 'constants/queries';

export class PhotoGalleryStore {
  isLoading = false;
  photos = [];
  nextLoadedPhotos = [];
  currentDisplayedItems = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      photos: observable,
      currentDisplayedItems: observable,
      getResponse: action.bound,
      loadMore: action.bound,
      loadPhotos: action.bound,
    });
  }

  getItems = (url) =>
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        'x-rapidapi-key': 'c486cb759cmshf1f8192d46b1331p132efajsnbd77780b9401',
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });

  getResponse = async () => {
    const categories = await this.getItems(RANDOM_SELECTION);
    const items = categories.drinks;
    return items;
  };

  loadPhotos = () => {
    this.getResponse()
      .then((data) => {
        this.addPhotos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  loadMore = () => {
    this.isLoading = true;
    this.loadPhotos();
    this.photos.length
      ? this.photos.forEach((elem) => {
          this.nextLoadedPhotos.push(elem);
        })
      : [];
    this.currentDisplayedItems = this.nextLoadedPhotos;
    this.isLoading = false;
  };

  addPhotos = (data) => {
    this.photos = [...data];
  };
}
