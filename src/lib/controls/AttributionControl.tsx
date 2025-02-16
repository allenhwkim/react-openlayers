import * as ol from 'ol';
import Attribution from 'ol/control/Attribution';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function AttributionControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new Attribution(props));
  }, [map]);

  return null;
};