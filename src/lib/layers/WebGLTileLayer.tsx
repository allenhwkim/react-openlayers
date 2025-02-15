import OlWebGLTileLayer from 'ol/layer/WebGLTile';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function WebGLTileLayer(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = new OlWebGLTileLayer(props);
    map.addLayer(layer);
  }, [map]);

  return null;
};
