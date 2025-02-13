import OlView from 'ol/View';
import { useEffect } from 'react';
import { useMap } from './Map';

export function View(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const view = new OlView(props);
    map.setView(view);
  }, [map]);

  return null;
};
