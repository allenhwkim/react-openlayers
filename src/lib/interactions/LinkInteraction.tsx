import Link from 'ol/interaction/Link';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function LinkInteraction(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const link = new Link(props);
    map.addInteraction(link);
  }, [map]);

  return null;
};
