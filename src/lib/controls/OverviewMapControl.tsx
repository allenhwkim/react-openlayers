import { useEffect } from 'react';
import OverviewMap, { Options } from 'ol/control/OverviewMap';
import { useMap } from '../Map';

export function OverviewMapControl(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new OverviewMap(props));
  }, [map]);

  return null;
};