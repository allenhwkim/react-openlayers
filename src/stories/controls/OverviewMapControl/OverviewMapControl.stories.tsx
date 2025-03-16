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
      <Map controls={[]}>
        <OverviewMapControl layers={overviewLayers} collapsed={false} />
        <View center={[-10997148, 4569099]} zoom={4}/>
      </Map>
    );
  }
}