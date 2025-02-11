import * as ol from 'ol';
import { useEffect } from 'react';
import { useMap } from './Map';
import Vector from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import OlPolygon from 'ol/geom/Polygon';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';

export function Polygon({coordinates, color=undefined}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const polygon = new OlPolygon(coordinates);
    polygon.transform('EPSG:4326', 'EPSG:3857'); // transform the coordinate system

    const polygonFeature = new ol.Feature(polygon);
    polygonFeature.setStyle(new Style({ fill: new Fill({color}) }));

    const source = new Vector({ features: [polygonFeature] });
    const polygonLayer = new VectorLayer({source});

    map.addLayer(polygonLayer);
  }, [map]);

  return null;
};
