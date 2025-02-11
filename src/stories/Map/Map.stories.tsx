import { OSM } from 'ol/source';
import { useRef } from 'react';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import * as ol from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import type { Meta, StoryObj } from '@storybook/react';
import { Map, TileLayer, View } from '../../lib';

export default { title: 'Map' } as Meta;
declare var window:any;

export const Primary: StoryObj<any> = {
  render: (props) => {
    const mapRef = useRef();

    const marker = new ol.Feature({
      geometry: new Point([0, 0]),
    });
  
    const markerStyle = new Style({
      image: new Icon({
        scale: 1,
        anchor: [0.5,32],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: `data:image/svg+xml,%3Csvg%20width%3D%2232px%22%20height%3D%2232px%22%20` + 
        `viewBox%3D%220%200%2015%2015%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000`+ 
        `%2Fsvg%22%3E%3Cpath%20fill%3D%22${'red'}%22%20d%3D%22M7.5%2C0C5.0676%2C0%2C2.2297%2C1.4865%2C2.2297`+ 
        `%2C5.2703%26%23xA%3B%26%23x9%3BC2.2297%2C7.8378%2C6.2838%2C13.5135%2C7.5%2C15c1.0811-1.4865%2C`+ 
        `5.2703-7.027%2C5.2703-9.7297C12.7703%2C1.4865%2C9.9324%2C0%2C7.5%2C0z%22%2F%3E%3C`+
        `%2Fsvg%3E`
      }),
    });
  
    marker.setStyle(markerStyle);
  
    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    setTimeout(() => {
      window.map=mapRef.current;
      window.map.addLayer(markerLayer);
      console.log({map: window.map});
    }, 1000);

    return <Map ref={mapRef}>
      <TileLayer source={new OSM()} />
      <View center={[0,0]} zoom={4}/>
    </Map>
  }
}