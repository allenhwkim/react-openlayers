import ImageWMS from 'ol/source/ImageWMS';
import { Map, View, ImageLayer } from '../../../lib';

export default {
  title: 'Layers/ImageLayer',
}

export const Primary = {
  render: (props) => {
    const source = new ImageWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {'LAYERS': 'topp:states'},
      ratio: 1,
      serverType: 'geoserver',
    })
    return <Map>
      <ImageLayer source={source}
        extent={[-13884991, 2870341, -7455066, 6338219]}
        properties={{key: 'myLayer'}} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  }
}