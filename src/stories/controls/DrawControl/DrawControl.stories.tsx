import { pointerMove } from 'ol/events/condition';
import {Map, View, DrawControl, SelectInteraction, TranslateInteraction} from '../../../lib';

export default {
  title: 'Controls/DrawControl',
}

export const Primary = {
  render: (props) => {
    return (
      <Map controls={[]}>
        <DrawControl style={{width: '24px'}}/>
        <View center={[-10997148, 4569099]} zoom={4}/>
        <SelectInteraction />
        <TranslateInteraction />
      </Map>
    );
  }
}