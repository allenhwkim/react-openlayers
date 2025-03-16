import {Map, TileLayer, View, DrawControl, SelectInteraction, TranslateInteraction} from '../../../lib';

export default {
  title: 'Controls/DrawControl',
}

export const Primary = {
  render: (props) => {
    return (
      <Map controls={[]}>
        <DrawControl />
        <View center={[-10997148, 4569099]} zoom={4}/>
        <SelectInteraction />
        <TranslateInteraction />
      </Map>
    );
  }
}