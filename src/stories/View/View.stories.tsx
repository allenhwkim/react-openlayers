import OSM from 'ol/source/OSM';
import { Map, View, TileLayer } from '../../lib';

export default {
  title: 'View',
}

export const Primary = {
  render: (props) => {
    return <Map>
      <TileLayer source={new OSM()} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}