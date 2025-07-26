import { useEffect } from 'react';
import OlView, { ViewOptions } from 'ol/View';
import { useMap } from './Map';

export function View(props: ViewOptions) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const view = new OlView(props);
    map.setView(view);
  }, [map]);

  return null;
}
