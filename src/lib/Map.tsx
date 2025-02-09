import {
  forwardRef, useImperativeHandle,
  useRef, useEffect, useState,
  createContext, useContext,
} from 'react';
import * as ol from 'ol';
import './style.css';

const MapContext = createContext<any>(undefined);

const OlMap = forwardRef( (props:any, ref:any) => {
  const [map, setMap] = useState<ol.Map>();
  const mapRef = useRef<any>();

  useImperativeHandle(ref, () => map, [map]);

  useEffect(() => {
    if (!mapRef.current) return;
    setMap(new ol.Map({target: mapRef.current }));
  }, []);

  return (
    <MapContext.Provider value={map}>
      <div ref={mapRef} className="ol-map">
        {props.children}
      </div>
    </MapContext.Provider>
  );
}
);

export default OlMap;

export const useMap = () => useContext(MapContext);