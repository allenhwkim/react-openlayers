import Feature from "ol/Feature";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import { getMarkerImage } from "./Marker";

export function addMarker(map, lonLat, color='red', char='') {
  let markerLayer = map.getLayers().getArray()
    .find(el => el.get('key') === 'markerLayer') as VectorLayer;
  
  if (!markerLayer) {
    const newMarkerLayer = new VectorLayer({
      source: new VectorSource({ features: [] }),
      properties: {key: 'markerLayer'},
      zIndex: 1,
    });
    map.addLayer(newMarkerLayer);
    markerLayer = newMarkerLayer;
  }

  // container of markers, this can be set when marker is added, so that I can remove it here.
  const markerFeature = new Feature({
    geometry: new Point(fromLonLat(lonLat))
  });

  markerFeature.setStyle(new Style({
    image: new Icon({
      scale: 1,
      anchor: [0.5,40],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: getMarkerImage(color, char)
    }),
  }));

  markerLayer.getSource().addFeature(markerFeature);
  return markerFeature;
}
