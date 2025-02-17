import OSM from 'ol/source/OSM';
import { Map, View, TileLayer, Overlay } from '../../lib';

export default {
  title: 'Overlay',
}

export const Primary = {
  render: (props) => {
    return <Map>
      <Overlay autoPan={{ animation: { duration: 250 }}}>
        <p>You clicked here.</p>
        <code>[[coordinate]]</code>
        <p>[[address]]</p>
      </Overlay>
      <TileLayer source={new OSM()} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}