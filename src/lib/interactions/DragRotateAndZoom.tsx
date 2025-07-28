import { useEffect } from 'react';
import DragRotateAndZoom, { Options } from 'ol/interaction/DragRotateAndZoom';
import { useMap } from '../Map';

export function DragRotateAndZoomInteraction(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const interaction = new DragRotateAndZoom(props);
    map.addInteraction(interaction);
  }, [map]);

  return null;
};
