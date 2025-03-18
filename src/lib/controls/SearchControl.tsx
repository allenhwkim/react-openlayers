import { Map as OlMap } from 'ol';
import Control from 'ol/control/Control';
import { useEffect } from 'react';
import { useMap } from '../Map';
import { searchIcon } from './icons';
import './SearchControl.css';
import { addMarker } from '../add-marker';
import { fromLonLat } from 'ol/proj';

declare var google: any;

class SearchControl extends Control {

  constructor(options={}) {
    const element = document.createElement('div');
    const {target} = options as any;
    super({element, target});

    element.className = 'search-control ol-unselectable ol-control';
    element.insertAdjacentHTML('beforeend', `
      <button id="toggle-btn" title="Clik here to switch layers">${searchIcon}</button>
      <input id="search" title="Enter address to search" autocomplete="off" size="40" />
    `);
    
    element.querySelector('.search-control #toggle-btn')
      .addEventListener('click', this.onToggleBtnClick.bind(this));
    
    const inputEl = element.querySelector('input#search');
    var autocomplete = new google.maps.places.Autocomplete(inputEl);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      const map = this.getMap();
      addMarker(map, [longitude, latitude], 'blue');
      map.getView().setCenter(fromLonLat([longitude, latitude]));
      map.getView().setZoom(18);
    });
  }

  onToggleBtnClick(event) {
    const controlEl = event.target.closest('.search-control');
    controlEl.classList.toggle('active');
  }
}


export default function(props) {
  const map: OlMap = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new SearchControl());
  }, [map]);

  return null;
};