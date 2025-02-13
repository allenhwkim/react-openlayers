import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from '../Map';
import ScaleLine from 'ol/control/ScaleLine';

// https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine-ScaleLine.html
export function ScaleLineControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new ScaleLine(props));
  }, [map]);

  return null;
};