import {Map, View, DragRotateAndZoomInteraction} from '../../../lib';

export default {
  title: 'Interactions/DragRotateAndZoomInteraction',
}

export const Primary = {
  render: (props) => {
    return (
      <Map>
        <DragRotateAndZoomInteraction />
      </Map>
    );
  }
}