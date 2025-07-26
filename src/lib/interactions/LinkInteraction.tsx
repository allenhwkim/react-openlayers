import { useEffect } from 'react';
import Link, { Options } from 'ol/interaction/Link';
import { useMap } from '../Map';

export function LinkInteraction(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const link = new Link(props);
    map.addInteraction(link);
  }, [map]);

  return null;
};
