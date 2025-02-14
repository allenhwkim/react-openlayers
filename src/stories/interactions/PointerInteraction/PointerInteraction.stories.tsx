import OSM from 'ol/source/OSM';
import {Map, TileLayer, View, PointerInteraction, VectorLayer} from '../../../lib';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
import VectorSource from 'ol/source/Vector';
import { Coordinate } from 'ol/coordinate';
import Feature, { FeatureLike } from 'ol/Feature';
import { getMarkerImage } from '../../../lib/Marker';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { Geometry } from 'ol/geom';

export default {
  title: 'Interactions/PointerInteraction',
}

export const Primary = {
  render: (props) => {

    const pointFeature = new Feature( new Point([0, 0]));
    const lineFeature = new Feature( new LineString([ [-1e7, 1e6], [-1e6, 3e6] ])) ;
    const polygonFeature = new Feature(
      new Polygon([ [ [-3e6, -1e6], [-3e6, 1e6], [-1e6, 1e6], [-1e6, -1e6], [-3e6, -1e6] ] ]),
    );
    const source = new VectorSource({
      features: [pointFeature, lineFeature, polygonFeature],
    })

    const style = {
      'icon-src': getMarkerImage(),
      'icon-opacity': 0.6,
      'icon-anchor': [0.5, 32],
      'icon-anchor-x-units': 'fraction',
      'icon-anchor-y-units': 'pixels',
      'stroke-width': 2,
      'stroke-color': [255, 0, 0, 1],
      'fill-color': [0, 0, 255, 0.5],
    }

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

    return (
      <Map>
        <TileLayer source={new OSM()} />
        <VectorLayer source={source} style={style} />
        <View center={[0, 0]} zoom={2}/>
        <PointerInteraction
          handleDownEvent={handleDownEvent}
          handleDragEvent={handleDragEvent}
          handleMoveEvent={handleMoveEvent}
          handleUpEvent={handleUpEvent} />
      </Map>
    );
  }
}