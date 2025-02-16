import { useEffect } from 'react';
import * as ol from 'ol';
import MousePosition from 'ol/control/MousePosition';
import { useMap } from '../Map';

export function MousePositionControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new MousePosition(props));
  }, [map]);

  return null;
};