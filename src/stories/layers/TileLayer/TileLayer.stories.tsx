import TileArcGISRest from 'ol/source/TileArcGISRest';
import OSM from 'ol/source/OSM';
import { Map, View, TileLayer } from '../../../lib';

export default {
  title: 'Layers/TileLayer',
}

export const Primary = {
  render: (props) => {
    const source =  new TileArcGISRest({
      url: 'https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/USA/MapServer',
    });
    return <Map>
      <TileLayer source={new OSM()} properties={{key: 'osmLayer'}} />
      <TileLayer source={source}
        extent={[-13884991, 2870341, -7455066, 6338219]}
        properties={{key: 'myLayer'}} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}