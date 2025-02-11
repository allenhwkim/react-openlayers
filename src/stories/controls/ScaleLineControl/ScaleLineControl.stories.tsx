import OSM from 'ol/source/OSM';
import {Map, TileLayer, View, ScaleLineControl} from '../../../lib';

export default {
  title: 'Controls/ScaleLineControl',
}

export const Primary = {
  render: (props) => {
    return <Map>
      <ScaleLineControl units="us" text={true} steps={4} bar={true} />
      <TileLayer source={new OSM()} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}