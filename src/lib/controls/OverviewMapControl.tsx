import { useEffect } from 'react';
import * as ol from 'ol';
import OverviewMap from 'ol/control/OverviewMap';
import { useMap } from '../Map';

export function OverviewMapControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new OverviewMap(props));
  }, [map]);

  return null;
};