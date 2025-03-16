import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react';
import {defaults as defaultControls} from 'ol/control/defaults.js';
import { Map as OlMap } from 'ol';
import View from 'ol/View'; 
import './ol.css';
import './Map.css';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

interface MapProps {
  children?: React.ReactNode;
  [key: string]: any; // Allow other OpenLayers Map options
}

const MapContext = createContext<OlMap | undefined>(undefined);

export const useMap = () => {
  const map = useContext(MapContext);
  // if (!map) throw new Error('useMap must be used within a Map component');
  return map;
};

export const Map = forwardRef<OlMap | undefined, MapProps>((props, ref) => {
  const [map, setMap] = useState<OlMap>();
  const mapRef = useRef<HTMLDivElement>(null); // Type the DOM ref

  useImperativeHandle(ref, () => map, [map]);

  const mounted = useRef(false);
  const defaultLayer = new TileLayer({ source: new OSM() }); 

  useEffect(() => {
    if (!mapRef.current || mounted.current) return;
    const mapProps = {
      ...{
        target: mapRef.current,
        layers: [defaultLayer],
        controls: defaultControls(),
        view: new View({
          center: [0, 0], // Default to [lon, lat]
          zoom: 2, // Default zoom level
        }),
      },
      ...props, // Override with props.view if provided
    };
    const olMap = new OlMap(mapProps);
    setMap(olMap);
    mounted.current = true;
    return () => {
      olMap.setTarget(null);
    };
  }, []);

  return (
    <MapContext.Provider value={map}>
      <div ref={mapRef} className="ol-map" tabIndex={0}>
        {props.children}
      </div>
    </MapContext.Provider>
  );
});
