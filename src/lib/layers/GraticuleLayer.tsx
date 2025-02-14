import OlGraticuleLayer from 'ol/layer/Graticule';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function GraticuleLayer(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = new OlGraticuleLayer(props);
    map.addLayer(layer);
  }, [map]);

  return null;
};
