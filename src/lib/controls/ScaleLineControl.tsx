import { useEffect } from 'react';
import ScaleLine, { Options } from 'ol/control/ScaleLine';
import { useMap } from '../Map';

export function ScaleLineControl(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new ScaleLine(props));
  }, [map]);

  return null;
};