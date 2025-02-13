import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from '../Map';
import MousePosition from 'ol/control/MousePosition';

// https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html
export function MousePositionControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new MousePosition(props));
  }, [map]);

  return null;
};