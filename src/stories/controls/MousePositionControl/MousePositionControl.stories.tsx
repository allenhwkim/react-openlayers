import { createStringXY } from 'ol/coordinate';
import { Map, TileLayer, View, MousePositionControl } from '../../../lib';

export default {
  title: 'Controls/MousePositionControl',
}

export const Primary = {
  render: (props) => {
    const format = createStringXY(4);
    return (
      <Map controls={[]}>
        <MousePositionControl coordinateFormat={format} projection='EPSG:4326' />
        <View center={[-10997148, 4569099]} zoom={4}/>
      </Map>
    );
  }
}