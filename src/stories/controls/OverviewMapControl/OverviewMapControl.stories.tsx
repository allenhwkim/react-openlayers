import OSM from 'ol/source/OSM';
import OlTileLayer from 'ol/layer/Tile';
import { Map, TileLayer, View, OverviewMapControl } from '../../../lib';

export default {
  title: 'Controls/OverviewMapControl',
}

export const Primary = {
  render: (props) => {
    const overviewLayers = [
      new OlTileLayer({source: new OSM()})
    ];
    return (
      <Map>
        <OverviewMapControl layers={overviewLayers} collapsed={false} />
        <TileLayer source={new OSM()} />
        <View center={[-10997148, 4569099]} zoom={4}/>
      </Map>
    );
  }
}