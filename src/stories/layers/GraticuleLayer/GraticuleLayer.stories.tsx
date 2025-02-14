import OSM from 'ol/source/OSM';
import { Map, View, TileLayer, GraticuleLayer } from '../../../lib';
import Stroke from 'ol/style/Stroke';

export default {
  title: 'Layers/GraticuleLayer',
}

export const Primary = {
  render: (props) => {

    const strokeStyle = new Stroke({
      color: 'rgba(255,120,0,0.9)',
      width: 2,
      lineDash: [0.5, 4],
    })

    return <Map>
      <TileLayer source={new OSM()} />
      <GraticuleLayer showLabels={true} strokeStyle={strokeStyle} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}