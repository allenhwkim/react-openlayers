import OlView from 'ol/View';
import { useEffect } from 'react';
import { useMap } from './Map';

export function View({center, zoom}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const view = new OlView({center, zoom});
    map.setView(view);
  }, [map]);

  return null;
};
