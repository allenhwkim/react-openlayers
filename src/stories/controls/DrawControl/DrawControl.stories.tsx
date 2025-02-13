import OSM from 'ol/source/OSM';
import {Map, TileLayer, View, DrawControl} from '../../../lib';

export default {
  title: 'Controls/DrawControl',
}

export const Primary = {
  render: (props) => {
    return (
      <Map>
        <DrawControl />
        <TileLayer source={new OSM()} />
        <View center={[-10997148, 4569099]} zoom={4}/>
      </Map>
    );
  }
}