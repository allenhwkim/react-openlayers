import VectorSource from 'ol/source/Vector';
import { OSM } from 'ol/source';
import KML from 'ol/format/KML';
import CircleStyle from 'ol/style/Circle';
import Cluster from 'ol/source/Cluster';
import Fill from 'ol/style/Fill';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import { Map, View, VectorLayer, TileLayer } from '../../dist'; // package.json -> ./dis/index.js
import '../../dist/index.css';

export default function App() {

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

