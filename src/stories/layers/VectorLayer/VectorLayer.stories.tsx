import VectorSource from 'ol/source/Vector';
import { Map, View, VectorLayer, TileLayer } from '../../../lib';
import { useRef } from 'react';
import { getMarkerImage } from '../../../lib/Marker';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
import { OSM } from 'ol/source';

export default {
  title: 'Layers/VectorLayer',
}

export const Primary = {
  render: (props) => {
    const mapRef = useRef();

    const pointFeature = new Feature(
      new Point([0, 0])
    );
    const lineFeature = new Feature(
      new LineString([ [-1e7, 1e6], [-1e6, 3e6] ]),
    );
    const polygonFeature = new Feature(
      new Polygon([
        [ [-3e6, -1e6], [-3e6, 1e6], [-1e6, 1e6], [-1e6, -1e6], [-3e6, -1e6] ],
      ]),
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
      <Map ref={mapRef}>
        <TileLayer source={new OSM()} />
        <VectorLayer source={source} style={style} />
        <View center={[0,0]} zoom={2}/>
      </Map>
    );
  }
}