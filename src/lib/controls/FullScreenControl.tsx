import { useEffect } from 'react';
import FullScreen, { Options } from 'ol/control/FullScreen';
import { useMap } from '../Map';

export function FullScreenControl(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new FullScreen(props));
  }, [map]);

  return null;
};