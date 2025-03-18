import * as ol from 'ol';
import { createContext, useContext, useEffect, useRef } from 'react';
import olLayerGroup from 'ol/layer/Group';
import { useMap } from '../Map';

const LayerGroupContext = createContext<olLayerGroup | undefined>(undefined);

export const useGroup = () => useContext(LayerGroupContext);

export const LayerGroup = (props: any) => {
  const map = useMap();
  const parentGroup = useContext(LayerGroupContext); // Check for a parent LayerGroup
  const layerGroupRef = useRef(new olLayerGroup(props));

  useEffect(() => {
    const layerGroup = layerGroupRef.current;
    props.name && layerGroup.set('name', props.name);
    const target = parentGroup || map; // Prefer parent LayerGroup, else Map

    if (target) {
      if (target instanceof ol.Map) {
        target.addLayer(layerGroup);
      } else {
        target.getLayers().push(layerGroup); // Add to parent LayerGroup
      }
    }

    return () => {
      if (target) {
        if (target instanceof ol.Map) {
          target.removeLayer(layerGroup);
        } else {
          target.getLayers().remove(layerGroup);
        }
      }
    };
  }, [map, parentGroup]);

  return (
    <LayerGroupContext.Provider value={layerGroupRef.current}>
      {props.children}
    </LayerGroupContext.Provider>
  );
};