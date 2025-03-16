import {Map, TileLayer, View, FullScreenControl} from '../../../lib';

export default {
  title: 'Controls/FullScreenControl',
}

export const Primary = {
  render: (props) => {
    return <Map controls={[]}>
      <FullScreenControl label="F"/>
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}