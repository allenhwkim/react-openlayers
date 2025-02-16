import { useEffect } from 'react';
import OlTileLayer from 'ol/layer/Tile';
import { useMap } from '../Map';

export function TileLayer(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = new OlTileLayer(props);
    map.addLayer(layer);
  }, [map]);

  return null;
};
