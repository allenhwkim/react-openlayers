import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from '../Map';
import OverviewMap from 'ol/control/OverviewMap';

// https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html
export function OverviewMapControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new OverviewMap(props));
  }, [map]);

  return null;
};