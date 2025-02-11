import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Map, View, VectorLayer } from '../../../lib';
import { useRef } from 'react';

export default {
  title: 'Layers/VectorLayer',
}

export const Primary = {
  render: (props) => {
    const mapRef = useRef();
    const source = new VectorSource({
      url: 'https://openlayers.org/data/vector/ecoregions.json',
      format: new GeoJSON(),
    });

    return (
      <Map ref={mapRef}>
        <VectorLayer 
          source={source}
          background="#1a2b39"
          style={{'fill-color': ['string', ['get', 'COLOR'], '#eee']}}
        />
        <View center={[0,0]} zoom={4}/>
      </Map>
    );
  }
}