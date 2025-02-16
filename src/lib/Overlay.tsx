import ReactDOMServer from 'react-dom/server';
import * as ol from 'ol';
import {toLonLat} from 'ol/proj';
import React, { useEffect } from 'react';
import { useMap } from './Map';
import './Overlay.css';

export function Overlay(props) {
  const map = useMap();

  const popupEl = document.createElement('div');
  popupEl.classList.add('ol-popup');
  popupEl.insertAdjacentHTML('beforeend', `
     <button class="ol-popup-closer"></button>
     <div id="popup-content">{{coordinate}}</div>
  `);

  const closeBtn = popupEl.querySelector('.ol-popup-closer');

  useEffect(() => {
    if (!map) return;
    const overlay = new ol.Overlay(props);
    overlay.setElement(popupEl);
    map.addOverlay(overlay);

    map.on('singleclick', function (evt) {
      const coordinate = evt.coordinate;
      const lonLat = toLonLat(coordinate);
      const contentEl = popupEl.querySelector('#popup-content');
      const contentHTML = ReactDOMServer.renderToString(props.children)
        .replace(/\[\[coordinate\]\]/g, ''+lonLat);
      contentEl.innerHTML = contentHTML;
      overlay.setPosition(coordinate);
    });

    closeBtn.addEventListener('click', function () {
      overlay.setPosition(undefined);
      this.blur();
      return false;
    });
  }, [map]);

  return null;
};
