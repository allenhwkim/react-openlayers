import { useEffect } from 'react';
import * as ol from 'ol';
import ScaleLine from 'ol/control/ScaleLine';
import { useMap } from '../Map';

export function ScaleLineControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new ScaleLine(props));
  }, [map]);

  return null;
};