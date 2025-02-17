import OlPointerInteraction from 'ol/interaction/Pointer';
import { useEffect } from 'react';
import { Coordinate } from 'ol/coordinate';
import { FeatureLike } from 'ol/Feature';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { Geometry } from 'ol/geom'
import { useMap } from '../Map';

export function PointerInteraction(props) {
  const map = useMap();

  let coordinate: Coordinate;
  let feature: FeatureLike;

  function handleDownEvent(evt: MapBrowserEvent<UIEvent>) {
    const _feature = evt.map.forEachFeatureAtPixel(evt.pixel, feature => feature);
    _feature && ([coordinate, feature] = [evt.coordinate, _feature]);
    return !!feature; // `true` to start the drag sequence.
  }

  function handleDragEvent(evt: MapBrowserEvent<UIEvent>) {
    const geometry = feature.getGeometry() as Geometry;
    const deltaX = evt.coordinate[0] - coordinate[0];
    const deltaY = evt.coordinate[1] - coordinate[1];
    geometry.translate(deltaX, deltaY);
    coordinate = evt.coordinate;
  }

  function handleMoveEvent(evt: MapBrowserEvent<UIEvent>) {
    const feature = evt.map.forEachFeatureAtPixel(evt.pixel, feature => feature);
    const element = evt.map.getTargetElement();
    element.style.cursor = feature ? 'pointer' : '';
  }

  function handleUpEvent() {
    coordinate = null;
    feature = null;
    return false; // return `false` to stop the drag sequence
  }

  useEffect(() => {
    if (!map) return;
    props = {...{handleDownEvent, handleMoveEvent, handleUpEvent, handleDragEvent}, ...props };
    const interaction = new OlPointerInteraction(props);
    map.addInteraction(interaction);
  }, [map]);

  return null;
};
