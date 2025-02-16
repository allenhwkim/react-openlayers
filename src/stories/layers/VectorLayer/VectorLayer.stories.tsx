import VectorSource from 'ol/source/Vector';
import { useRef } from 'react';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import Polygon from 'ol/geom/Polygon';
import { OSM } from 'ol/source';
import KML from 'ol/format/KML';
import CircleStyle from 'ol/style/Circle';
import Cluster from 'ol/source/Cluster';
import Fill from 'ol/style/Fill';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import { Map, View, VectorLayer, TileLayer, getMarkerImage } from '../../../lib';

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

export const ClusterLayer = {
  render: (props) => {

    function getClusterRadius(size) {
      const [minR, maxR, minIn, maxIn] = [10, 40, 1, 300]
      const inputRange = size / (maxIn - minIn);
      const output = minR + (maxR - minR) * inputRange;
      return Math.min(Math.max(output, minR), maxR);
    }

    const source = new Cluster({
      distance: 30,
      source: new VectorSource({
        url: 'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml',
        format: new KML(),
      }),
    });

    const style = (feature) => {
      const size = feature.get('features').length;
    
      return new Style({
        image: new CircleStyle({
          radius: getClusterRadius(size),
          fill: new Fill({ color: size > 1 ? [255,0,0,0.5] : 'blue' }),
        }),
        text: new Text({text: size, fill: new Fill({color: '#FFF'})})
      });
    };

    return (
      <Map>
        <TileLayer source={new OSM()} />
        <VectorLayer source={source} style={style} />
        <View center={[0,0]} zoom={2}/>
      </Map>
    );
  }
}

