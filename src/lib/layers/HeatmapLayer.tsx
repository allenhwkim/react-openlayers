import { useEffect, useRef } from 'react';
import { Map as OlMap } from 'ol';
import OlHeatmapLayer, { Options } from 'ol/layer/Heatmap';
import { useMap } from '../Map';
import { useGroup } from './LayerGroup';

export function HeatmapLayer(props: Options & { name?: string }) {
  const map = useMap();
  const group = useGroup();
  const layerRef = useRef(new OlHeatmapLayer(props)); // single instance

  useEffect(() => {
    if (!map && !group) return;

    const layer = layerRef.current; // same instance every time
    props.name && layer.set('name', props.name);
    const target = group || map;

    if (target) {
      if (target instanceof OlMap) {
        target.addLayer(layer);
      } else {
        target.getLayers().push(layer);
      }
    }

    return () => {
      if (target) {
        if (target instanceof OlMap) {
          target.removeLayer(layer);
        } else {
          target.getLayers().remove(layer);
        }
      }
    };
  }, [map, group]);

  return null;
}