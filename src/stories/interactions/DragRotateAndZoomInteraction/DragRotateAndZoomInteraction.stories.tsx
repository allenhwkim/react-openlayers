import OSM from 'ol/source/OSM';
import {Map, TileLayer, View, DragRotateAndZoomInteraction} from '../../../lib';

export default {
  title: 'Interactions/DragRotateAndZoomInteraction',
}

export const Primary = {
  render: (props) => {

    return (
      <Map>
        <TileLayer source={new OSM()} />
        <View center={[0, 0]} zoom={2}/>
        <DragRotateAndZoomInteraction />
      </Map>
    );
  }
}