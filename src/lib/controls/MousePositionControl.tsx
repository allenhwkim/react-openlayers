import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from '../Map';
import MousePosition from 'ol/control/MousePosition';

export function MousePositionControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new MousePosition(props));
  }, [map]);

  return null;
};