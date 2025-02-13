import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from '../Map';
import Attribution from 'ol/control/Attribution';

export function AttributionControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new Attribution(props));
  }, [map]);

  return null;
};