import OlPointerInteraction from 'ol/interaction/Pointer';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function PointerInteraction(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const interaction = new OlPointerInteraction(props);
    map.addInteraction(interaction);
  }, [map]);

  return null;
};
