import OlHeatmapLayer from 'ol/layer/Heatmap';
import { useEffect } from 'react';
import { useMap } from '../Map';

export function HeatmapLayer(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = new OlHeatmapLayer(props);
    map.addLayer(layer);
  }, [map]);

  return null;
};
