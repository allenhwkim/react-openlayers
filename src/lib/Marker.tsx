import { useEffect } from 'react';
import { fromLonLat, toLonLat } from 'ol/proj';
import { useMap } from './Map';
import { getLonLat } from './util';
import { addMarker, removeMarker } from './marker-func';

function getNextChar(char) {
  const ascii = char.charCodeAt(0);
  const nextChar = String.fromCharCode(ascii > 127 ? 0 : ascii+1);
  if (nextChar.match(/^[0-9A-Z]$/)) {
    return nextChar;
  } else {
    return getNextChar(nextChar);
  }
}

export function Marker({
  lonLat=undefined,
  address=undefined,
  color='red',
  char=' ',
  addOnClick=false,
  removeOnClick=false
}) {
  const map = useMap();
  let markerChar = char;

  useEffect(() => {
    if (!map) return;

    if (lonLat) {
      addMarker(map, lonLat, color, markerChar);
      map.getView().setCenter(fromLonLat(lonLat))
    } else if (address) {
      getLonLat(address).then(resp => {
        if (resp[0]) {
          const lonLat = [resp[0].lon, resp[0].lat];
          const feature = addMarker(map, lonLat, color, markerChar);
          feature.set('address', resp[0].display_name)
          map.getView().setCenter(fromLonLat(lonLat))
        }
      });
    }

    map.on('singleclick', function (evt) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, feature => feature);
      if (feature) {
        removeOnClick && removeMarker(map, feature);
      } else {
        const clickLonLat = toLonLat(evt.coordinate);
        markerChar = getNextChar(markerChar);
        addOnClick && addMarker(map, clickLonLat, color, markerChar)
      }
    });
  }, [map]);

  return null;
};
