import OSM from 'ol/source/OSM';
import {Map, TileLayer, View, SelectInteraction, VectorLayer, TranslateInteraction} from '../../../lib';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { useRef } from 'react';

export default {
  title: 'Interactions/TranslateInteraction',
}

export const Primary = {
  render: (props) => {
    const selectRef = useRef();

    const pointFeature = new Feature( new Point([0, 0]));
    const lineFeature = new Feature( new LineString([ [-1e7, 1e6], [-1e6, 3e6] ])) ;
    const polygonFeature = new Feature(
      new Polygon([ [ [-3e6, -1e6], [-3e6, 1e6], [-1e6, 1e6], [-1e6, -1e6], [-3e6, -1e6] ] ]),
    );
    const source = new VectorSource({
      features: [pointFeature, lineFeature, polygonFeature],
    })

    return (
      <Map>
        <TileLayer source={new OSM()} />
        <VectorLayer source={source} />
        <View center={[0, 0]} zoom={2}/>
        <SelectInteraction ref={selectRef} />
        <TranslateInteraction />
      </Map>
    );
  }
}