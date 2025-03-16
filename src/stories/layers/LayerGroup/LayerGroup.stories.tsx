import TileArcGISRest from 'ol/source/TileArcGISRest';
import { Map, View, TileLayer, HeatmapLayer, LayerGroup, GraticuleLayer } from '../../../lib';
import KML from 'ol/format/KML';
import VectorSource from 'ol/source/Vector';

export default {
  title: 'Layers/LayerGroup',
}

export const Primary = {
  render: (props) => {
    const tileSrc =  new TileArcGISRest({
      url: 'https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/USA/MapServer',
    });
    const heatMapSrc = new VectorSource({
      url: 'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({extractStyles: false}),
    });
    const weight = function (feature) {
      const magnitude = parseFloat(feature.get('name').substr(2));
      return magnitude - 5;
    };
    return <Map>
      <LayerGroup>
        <GraticuleLayer showLabels={true} />
        <TileLayer source={tileSrc} extent={[-13884991, 2870341, -7455066, 6338219]} />
        <HeatmapLayer {...{source: heatMapSrc, weight, blur: 20, radius:20, zIndex:1 }} />
      </LayerGroup>
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}