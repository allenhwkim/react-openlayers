import OlTileLayer from 'ol/layer/Tile';
import { useEffect } from 'react';
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
