import { useEffect } from 'react';
import MousePosition, { Options } from 'ol/control/MousePosition';
import { useMap } from '../Map';

export function MousePositionControl(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new MousePosition(props));
  }, [map]);

  return null;
};