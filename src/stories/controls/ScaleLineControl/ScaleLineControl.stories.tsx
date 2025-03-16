import {Map, View, ScaleLineControl} from '../../../lib';

export default {
  title: 'Controls/ScaleLineControl',
}

export const Primary = {
  render: (props) => {
    return <Map controls={[]}>
      <ScaleLineControl units="us" text={true} steps={4} bar={true} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}