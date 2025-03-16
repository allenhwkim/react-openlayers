import {Map, SelectInteraction, VectorLayer} from '../../../lib';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';

export default {
  title: 'Interactions/SelectInteraction',
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

    function onSelect(e) {
      console.log('selected', e.target.getFeatures().getLength());
      console.log('deselected', e.deselected.length);
    };

    return (
      <Map>
        <VectorLayer source={source} />
        <SelectInteraction onSelect={onSelect} />
      </Map>
    );
  }
}