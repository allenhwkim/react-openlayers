import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from '../Map';
import ScaleLine from 'ol/control/ScaleLine';

// https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine-ScaleLine.html
export function ScaleLineControl({units, bar=false, steps=4, text=false}) {
  const map: ol.Map = useMap();

  // units 'degrees', 'imperial', 'nautical', 'metric', or 'us'
  useEffect(() => {
    if (!map) return;
    console.log('ScaleLine props', {units, bar, steps, text})
    map.addControl(new ScaleLine({units, bar, steps, text}));
  }, [map]);

  return null;
};