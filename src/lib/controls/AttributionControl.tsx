import Attribution, { Options } from 'ol/control/Attribution';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function AttributionControl(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new Attribution(props));
  }, [map]);

  return null;
};