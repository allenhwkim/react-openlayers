import { useEffect } from 'react';
import Select from 'ol/interaction/Select';
import { useMap } from '../Map';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text'; // Add this import
import Circle from 'ol/style/Circle'; // Add this import for point styling
import { getArea, getLength } from 'ol/sphere'; // Add this import for geodesic area calculation

interface SelectInteractionProps {
  onSelect?: (event: any) => void; // Replace 'any' with ol.SelectEvent if importing types
  layers?: VectorLayer[]; // Example: restrict to specific layers
  [key: string]: any;
}
const defaultStyle = function (feature) {
  const type = feature.getGeometry().getType();
  const geometry = feature.getGeometry();

  let style;
  if (type === 'Point') {
    style = new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({ color: 'rgba(255, 0, 0, 0.4)' }),
        stroke: new Stroke({ color: '#ff0000', width: 2 }),
      }),
    });
  } else if (type === 'LineString') {
    style = new Style({
      stroke: new Stroke({
        color: '#ff0000',
        width: 3, // Adjustable line width
      }),
    });
    // Calculate geodesic length in meters
    const lengthInMeters = getLength(geometry);
    // Convert to kilometers
    const lengthInKm = lengthInMeters / 1000;
    if (lengthInKm > 0) {
      style.setText(
        new Text({
          text: `Length: ${lengthInKm.toFixed(2)} km`,
          font: '12px Calibri,sans-serif',
          fill: new Fill({ color: '#000' }),
          stroke: new Stroke({ color: '#fff', width: 3 }),
          offsetY: -10,
        })
      );
    }
  } else if (type === 'Circle') {
    style = new Style({
      fill: new Fill({ color: 'rgba(255, 0, 0, 0.4)' }),
      stroke: new Stroke({ color: '#ff0000', width: 2 }),
    });
  } else {
    // Polygons and other geometries
    style = new Style({
      fill: new Fill({ color: 'rgba(255, 0, 0, 0.4)' }),
      stroke: new Stroke({ color: '#ff0000', width: 2 }),
    });
    try {
      const areaInMeters = getArea(geometry);
      const areaInKm2 = areaInMeters / 1_000_000;
      if (areaInKm2 > 0) {
        style.setText(
          new Text({
            text: `Area: ${areaInKm2.toFixed(2)} km²`,
            font: '12px Calibri,sans-serif',
            fill: new Fill({ color: '#000' }),
            stroke: new Stroke({ color: '#fff', width: 3 }),
            offsetY: -10,
          })
        );
      }
    } catch {} // getArea(geometry) may fail
  }
  return style;
}

export function SelectInteraction(props:SelectInteractionProps) {
  const map = useMap();
  props = { ...{style: defaultStyle}, ...props };

  useEffect(() => {
    if (!map) return;
    const select = new Select(props);
    map.addInteraction(select);

    let selectLayer: VectorLayer;

    select.on('select', function(event) {
      // when selected
      const selectedFeatures = event.selected;
      if (selectedFeatures.length > 0) {
        selectLayer = select.getLayer(selectedFeatures[0]); // Still uses first layer
        props.onSelect && props.onSelect(event);
      }

      // when deselected
      const deselectedFeatures = event.deselected;
      deselectedFeatures.forEach(feature => {
        feature.setStyle(null);  // Reset to base style without text
      });
    });

    const onKeyPressed = (event) => {
      if (event.key === 'Backspace') {
        const selectedFeatures = select.getFeatures();
        selectedFeatures.forEach(feature => {
          const layer = select.getLayer(feature); // Get layer for each feature
          if (layer) {
            const source = layer.getSource();
            source.removeFeature(feature);
          }
        });
        selectedFeatures.clear();
      }
    };

    map.getTargetElement().addEventListener('keydown', onKeyPressed);
      
    return () => {
      map.getTargetElement().removeEventListener('keydown', onKeyPressed);
    }
  }, [map, props.onSelect]);

  return null;
};