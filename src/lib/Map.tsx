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


  const iconFeature = new ol.Feature({
    geometry: new Point([0, 0]),
  });

  const iconStyle = new Style({
    image: new Icon({
      scale: 1,
      anchor: [0.5,32],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: `data:image/svg+xml,%3Csvg%20width%3D%2232px%22%20height%3D%2232px%22%20viewBox%3D%220%200%2015%2015%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E` + 
      `%3Cpath%20fill%3D%22${'red'}%22%20d%3D%22M7.5%2C0C5.0676%2C0%2C2.2297%2C1.4865%2C2.2297%2C5.2703%26%23xA%3B%26%23x9%3BC2.2297%2C7.8378%2C6.2838%2C13.5135%2C7.5%2C15c1.0811-1.4865%2C5.2703-7.027%2C5.2703-9.7297C12.7703%2C1.4865%2C9.9324%2C0%2C7.5%2C0z%22%2F%3E%3C`+
      `%2Fsvg%3E`
    }),
  });

  iconFeature.setStyle(iconStyle);

  const markerLayer = new VectorLayer({
    source: new VectorSource({
      features: [iconFeature],
    }),
  });

  useEffect(() => {
    if (!mapRef.current) return;
    console.log('defaultControls', defaultControls());
    setMap(new ol.Map({
      target: mapRef.current,
      controls: defaultControls(),
    }));
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

export const useMap = () => useContext(MapContext);