import { Map as OlMap } from 'ol';
import { useEffect, useRef } from 'react';
import OlGraticuleLayer from 'ol/layer/Graticule';
import { useMap } from '../Map';
import { useGroup } from './LayerGroup';

export function GraticuleLayer(props) {
  const map = useMap();
  const group = useGroup();
  const layerRef = useRef(new OlGraticuleLayer(props)); // single instance

  useEffect(() => {
    if (!map && !group) return;

    const layer = layerRef.current; // same instance every time
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