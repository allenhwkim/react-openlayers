import { useEffect } from 'react';
import OlGraticuleLayer from 'ol/layer/Graticule';
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
