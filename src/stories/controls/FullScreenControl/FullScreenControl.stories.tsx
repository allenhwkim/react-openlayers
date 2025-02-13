import OSM from 'ol/source/OSM';
import {Map, TileLayer, View, FullScreenControl} from '../../../lib';

export default {
  title: 'Controls/FullScreenControl',
}

export const Primary = {
  render: (props) => {
    return <Map>
      <FullScreenControl label="F"/>
      <TileLayer source={new OSM()} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}