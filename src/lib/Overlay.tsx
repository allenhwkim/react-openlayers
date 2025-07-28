import ReactDOMServer from 'react-dom/server';
import * as ol from 'ol';
import { toLonLat } from 'ol/proj';
import { PropsWithChildren, useEffect } from 'react';
import { useMap } from './Map';
import './Overlay.css';
import { getAddress } from './util';
import { Options } from 'ol/Overlay';

export function Overlay(props: Options & PropsWithChildren) {
  const map = useMap();

  const popupEl = document.createElement('div');
  popupEl.classList.add('ol-popup');
  popupEl.insertAdjacentHTML('beforeend', `
     <button class="ol-popup-closer"></button>
     <div id="popup-content"></div>
  `);

  const closeBtn = popupEl.querySelector('.ol-popup-closer');

  useEffect(() => {
    if (!map) return;
    const overlay = new ol.Overlay(props);
    overlay.setElement(popupEl);
    map.addOverlay(overlay);

    map.on('singleclick', async function (evt) {
      const coordinate = evt.coordinate;
      const [lon, lat] = toLonLat(coordinate);
      const contentEl = popupEl.querySelector('#popup-content');
      let address;
      try {
        const zoom = Math.ceil(map.getView().getZoom() || 0); // Add nullish coalescing for zoom
        address = await getAddress(lon, lat, zoom);
      } catch (e) {
        address = '';
        console.error(e);
      }

      const contentHTML = ReactDOMServer.renderToString(props.children)
        .replace(/\[\[coordinate\]\]/g, '' + [lon, lat])
        .replace(/\[\[address\]\]/g, address);
      if (contentEl) {
        // Check if contentEl is not null
        contentEl.innerHTML = contentHTML;
      }
      overlay.setPosition(coordinate);
    });

    if (closeBtn) {
      // Check if closeBtn is not null
      closeBtn.addEventListener('click', function (this: HTMLButtonElement) {
        // Explicitly define 'this' type
        overlay.setPosition(undefined);
        this.blur();
        return false;
      });
    }
  }, [map, props]); // Added props to dependency array

  return null;
}