/**
 * NOTE: if you rename this file to icon.ts, there will be dupliate definition error
 */
import * as React from 'react';
import * as ol from 'openlayers';

/**
 * NOTE: Tried to make a class by extending ol.source.Vector, but it did not work
 */
export function getIcon() {

  let iconFeature: ol.Feature =
    new ol.Feature({
      geometry: new ol.geom.Point([0, 0]),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });

  let iconStyle: ol.style.Style =
    new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'https://harrywood.co.uk/maps/examples/leaflet/leaflet/images/marker-icon.png'
      })
    });
  iconFeature.setStyle(iconStyle);

  let source = new ol.source.Vector({features: [iconFeature]});

  return source;
}
