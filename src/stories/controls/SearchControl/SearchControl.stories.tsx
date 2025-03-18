import {Map, View, SearchControl} from '../../../lib';

export default {
  title: 'Controls/SearchControl',
}

export const Primary = {
  render: (props) => {
    return (
      <Map controls={[]}>
        <SearchControl />
        <View center={[-10997148, 4569099]} zoom={4}/>
      </Map>
    );
  }
}