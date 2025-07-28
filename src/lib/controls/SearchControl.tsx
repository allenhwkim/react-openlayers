import Control, { Options } from 'ol/control/Control';
import { useEffect } from 'react';
import { useMap } from '../Map';
import { searchIcon } from './icons';
import './SearchControl.css';
import { addMarker } from '../marker-func';
import { fromLonLat } from 'ol/proj';

declare let google: any;

class SearchControl extends Control {
  constructor(options: Options = {}) {
    const element = document.createElement('div');
    const { target } = options;
    super({ element, target });

    element.className = 'search-control ol-unselectable ol-control';
    element.insertAdjacentHTML(
      'beforeend',
      `
      <button id="toggle-btn" title="Click here to switch layers">${searchIcon}</button>
      <input id="search" title="Enter address to search" autocomplete="off" size="40" />
    `,
    );

    element
      .querySelector('.search-control #toggle-btn')
      ?.addEventListener('click', this.onToggleBtnClick.bind(this));

    // Google maps api is loaded manually by each user using own api key
    // e.g., <script src="https://maps.googleapis.com/maps/api/js?key=xxx&libraries=places"></script>
    this.initGoogleAutoComplete();
  }

  initGoogleAutoComplete() {
    const inputEl = this.element.querySelector('input#search');
    const autocomplete = new google.maps.places.Autocomplete(inputEl);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      const map = this.getMap();
      if (map) {
        addMarker(map, [longitude, latitude], 'blue');
        map.getView().setCenter(fromLonLat([longitude, latitude]));
        map.getView().setZoom(18);
      }
    });
  }

  onToggleBtnClick(event: Event) {
    const controlEl = (event.target as HTMLElement).closest('.search-control');
    controlEl?.classList.toggle('active');
  }
}

export default function (props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new SearchControl(props));
  }, [map]);

  return null;
}