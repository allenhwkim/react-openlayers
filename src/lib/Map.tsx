import {
  forwardRef, useImperativeHandle,
  useRef, useEffect, useState,
  createContext, useContext,
} from 'react';
import * as ol from 'ol';
import './style.css';
import './ol.css';
import {defaults as defaultControls} from 'ol/control/defaults.js';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

const MapContext = createContext<ol.Map>(undefined);

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
    const mapProps = {...{
      target: mapRef.current,
      layers: [markerLayer],
      controls: defaultControls(),
    }, ...props}
    setMap(new ol.Map(mapProps));
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