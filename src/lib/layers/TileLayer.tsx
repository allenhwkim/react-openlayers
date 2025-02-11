import OlTileLayer from 'ol/layer/Tile';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function TileLayer({
  source,
  extent=undefined,
  zIndex=undefined,
  properties=undefined
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = new OlTileLayer({
      source,
      extent,
      zIndex,
      properties
    });
    map.addLayer(layer);
  }, [map, source]);

  return null;
};
