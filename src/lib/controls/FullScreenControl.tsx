import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from '../Map';
import FullScreen from 'ol/control/FullScreen';

export function FullScreenControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new FullScreen(props));
  }, [map]);

  return null;
};