import { useEffect } from 'react';
import * as ol from 'ol';
import FullScreen from 'ol/control/FullScreen';
import { useMap } from '../Map';

export function FullScreenControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new FullScreen(props));
  }, [map]);

  return null;
};