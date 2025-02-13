import {
  forwardRef, useImperativeHandle,
  useRef, useEffect, useState,
  createContext, useContext,
} from 'react';
import * as ol from 'ol';
import './style.css';
import './ol.css';
import {defaults as defaultControls} from 'ol/control/defaults.js';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

const MapContext = createContext<any>(undefined);

export const Map = forwardRef( (props:any, ref:any) => {
  const [map, setMap] = useState<ol.Map>();
  const mapRef = useRef<any>();

  useImperativeHandle(ref, () => map, [map]);

  const markerLayer = new VectorLayer({
    source: new VectorSource({ features: [] }),
    properties: {key: 'markerLayer'},
    zIndex: 1,
  });

  useEffect(() => {
    if (!mapRef.current) return;
    console.log('defaultControls', defaultControls());
    setMap(new ol.Map({
      target: mapRef.current,
      layers: [markerLayer],
      controls: defaultControls(),
    }));
  }, []);

  return (
    <MapContext.Provider value={map}>
      <div ref={mapRef} className="ol-map" tabIndex={0}>
        {props.children}
      </div>
    </MapContext.Provider>
  );
}
);

export const useMap = () => useContext(MapContext);