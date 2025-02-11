import OlVectorLayer from 'ol/layer/Vector';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function VectorLayer({
  source,
  extent=undefined,
  style=undefined,
  background=undefined,
  zIndex=undefined,
  properties=undefined
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = new OlVectorLayer({
      source,
      extent,
      style,
      background,
      zIndex,
      properties
    });
    map.addLayer(layer);
  }, [map, source]);

  return null;
};
