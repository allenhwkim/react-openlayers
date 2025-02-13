import OlVectorLayer from 'ol/layer/Vector';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function VectorLayer(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = new OlVectorLayer(props);
    map.addLayer(layer);
  }, [map]);

  return null;
};
