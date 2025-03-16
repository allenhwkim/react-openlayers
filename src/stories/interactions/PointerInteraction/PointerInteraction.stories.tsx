import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import {Map, PointerInteraction, VectorLayer, getMarkerImage} from '../../../lib';

export default {
  title: 'Interactions/PointerInteraction',
}

export const Primary = {
  render: () => {

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

    return (
      <Map>
        <VectorLayer source={source} style={style} />
        <PointerInteraction />
      </Map>
    );
  }
}