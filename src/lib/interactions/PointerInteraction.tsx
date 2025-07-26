import OlPointerInteraction, { Options } from 'ol/interaction/Pointer';
import { useEffect } from 'react';
import { Coordinate } from 'ol/coordinate';
import { FeatureLike } from 'ol/Feature';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { Geometry } from 'ol/geom';
import { useMap } from '../Map';

export function PointerInteraction(props: Options) {
  const map = useMap();

  let coordinate: Coordinate | null = null;
  let feature: FeatureLike | null = null;

  function handleDownEvent(evt: MapBrowserEvent<PointerEvent>) {
    const _feature = evt.map.forEachFeatureAtPixel(
      evt.pixel,
      (feature) => feature,
    );
    if (_feature) {
      [coordinate, feature] = [evt.coordinate, _feature];
    }
    return !!feature; // `true` to start the drag sequence.
  }

  function handleDragEvent(evt: MapBrowserEvent<PointerEvent>) {
    if (feature && coordinate) {
      const geometry = feature.getGeometry() as Geometry;
      const deltaX = evt.coordinate[0] - coordinate[0];
      const deltaY = evt.coordinate[1] - coordinate[1];
      geometry.translate(deltaX, deltaY);
      coordinate = evt.coordinate;
    }
  }

  function handleMoveEvent(evt: MapBrowserEvent<PointerEvent>) {
    const featureAtPixel = evt.map.forEachFeatureAtPixel(
      evt.pixel,
      (feature) => feature,
    );
    const element = evt.map.getTargetElement();
    element.style.cursor = featureAtPixel ? 'pointer' : '';
  }

  function handleUpEvent() {
    coordinate = null;
    feature = null;
    return false; // return `false` to stop the drag sequence
  }

  useEffect(() => {
    if (!map) return;
    const interaction = new OlPointerInteraction({
      handleDownEvent:
        handleDownEvent as (
          arg0: MapBrowserEvent<KeyboardEvent | WheelEvent | PointerEvent>,
        ) => boolean,
      handleMoveEvent:
        handleMoveEvent as (
          arg0: MapBrowserEvent<KeyboardEvent | WheelEvent | PointerEvent>,
        ) => void,
      handleUpEvent,
      handleDragEvent:
        handleDragEvent as (
          arg0: MapBrowserEvent<KeyboardEvent | WheelEvent | PointerEvent>,
        ) => void,
      ...props,
    });
    map.addInteraction(interaction);
    return () => {
      map.removeInteraction(interaction);
    };
  }, [map, props]);

  return null;
}