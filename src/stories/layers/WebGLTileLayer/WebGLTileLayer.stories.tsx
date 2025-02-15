import { Map, View, WebGLTileLayer } from '../../../lib';
import ImageTileSource from 'ol/source/ImageTile';

export default {
  title: 'Layers/WebGLTileLayer',
}

export const Primary = {
  render: (props) => {

    const source = new ImageTileSource({
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attributions: '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',
    });

    return <Map>
      <WebGLTileLayer source={source} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}