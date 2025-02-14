import DragRotateAndZoom from 'ol/interaction/DragRotateAndZoom';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function DragRotateAndZoomInteraction(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const interaction = new DragRotateAndZoom(props);
    map.addInteraction(interaction);
  }, [map]);

  return null;
};
