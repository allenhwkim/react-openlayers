import OSM from 'ol/source/OSM';
import {Map, TileLayer, View, AttributionControl} from '../../../lib';

export default {
  title: 'Controls/AttributionControl',
}

export const Primary = {
  render: (props) => {
    return (
      <Map controls={[]}>
        <AttributionControl collapsible={true} attributions='Hello Attribution' />
        <View center={[-10997148, 4569099]} zoom={4}/>
      </Map>
    );
  }
}