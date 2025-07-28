import { Map as OlMap } from 'ol';
import { useEffect, useRef } from 'react';
import OlTileLayer from 'ol/layer/Tile';
import TileSource from 'ol/source/Tile'; // Import the base TileSource type
import { Options as BaseTileLayerOptions } from 'ol/layer/BaseTile'; // Still import Options
import { useMap } from '../Map';
import { useGroup } from './LayerGroup';

interface TileLayerProps extends BaseTileLayerOptions<TileSource> {
  name?: string;
}

export function TileLayer(props: TileLayerProps) {
  const map = useMap();
  const group = useGroup();
  const layerRef = useRef(new OlTileLayer(props)); // single instance

  useEffect(() => {
    if (!map && !group) return;

    const layer = layerRef.current; // same instance every time
    if (props.name) {
      layer.set('name', props.name);
    }
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
  }, [map, group, props.name]);

  return null;
}