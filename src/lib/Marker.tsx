import { useEffect } from 'react';
import * as ol from 'ol';
import {fromLonLat, toLonLat} from 'ol/proj';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import { useMap } from './Map';
import { P } from 'storybook/internal/components';

export function getMarkerImage(color='red', text='A') {
  return `data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E` + 
    `%3Csvg%20width%3D%2240px%22%20height%3D%2240px%22%20viewBox%3D%220%200%2015%2015%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E` + 
      `%3Cpath%20fill%3D%22${color}%22%20d%3D%22M7.5%2C0C5.0676%2C0%2C2.2297%2C1.4865%2C2.2297%2C5.2703%26%23xA%3B%26%23x9%3BC2.2297%2C7.8378%2C6.2838%2C13.5135%2C7.5%2C15c1.0811-1.4865%2C5.2703-7.027%2C5.2703-9.7297C12.7703%2C1.4865%2C9.9324%2C0%2C7.5%2C0z%22%2F%3E` + 
      `%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%226px%22%3E`+
        text + 
      `%3C%2Ftext%3E`+
    `%3C%2Fsvg%3E`;
}

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
  lonLat=[0,0], 
  color='red', 
  char=' ', 
  addOnClick=false, 
  removeOnClick=false
}) {
  const map = useMap();
  let markerChar = char;

  function addMarker(layer, lonLat, color, char) {
    const markerFeature = new ol.Feature({
      geometry: new Point(fromLonLat(lonLat))
    });
    markerFeature.setStyle(new Style({
      image: new Icon({
        scale: 1,
        anchor: [0.5,40],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: getMarkerImage(color, char)
      }),
    }));

    layer.getSource().addFeature(markerFeature);
  }

  useEffect(() => {
    if (!map) return;

    const markerLayer = map.getLayers().getArray()
      .find(el => el.get('key') === 'markerLayer') as VectorLayer;
    addMarker(markerLayer, lonLat, color, markerChar);

    map.on('singleclick', function (evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel, feature => feature);
      if (feature) {
        removeOnClick && markerLayer?.getSource().removeFeature(feature);
      } else {
        const clickLonLat = toLonLat(evt.coordinate);
        markerChar = getNextChar(markerChar);
        addOnClick && addMarker(markerLayer, clickLonLat, color, markerChar)
      }
    });
  }, [map]);

  return null;
};
