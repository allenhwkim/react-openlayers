import OSM from 'ol/source/OSM';
import KML from 'ol/format/KML';
import { Map, View, TileLayer, HeatmapLayer } from '../../../lib';
import VectorSource from 'ol/source/Vector';

export default {
  title: 'Layers/HeatmapLayer',
}

export const Primary = {
  render: (props) => {

    const source = new VectorSource({
      url: 'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({extractStyles: false}),
    });
    const weight = function (feature) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      const name = feature.get('name');
      const magnitude = parseFloat(name.substr(2));
      return magnitude - 5;
    };

    return <Map>
      <TileLayer source={new OSM()} />
      <HeatmapLayer {...{source, weight, blur: 20, radius:20 }} />
      <View center={[-10997148, 4569099]} zoom={3}/>
    </Map>
  }
}