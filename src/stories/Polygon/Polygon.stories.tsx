import { OSM } from 'ol/source';
import { useEffect, useRef } from 'react';
import { fromLonLat } from 'ol/proj';
import type { Meta, StoryObj } from '@storybook/react';
import Fill from 'ol/style/Fill';
import { Map, TileLayer, View, Polygon } from '../../lib';

declare let window: any;

export default { title: 'Polygon' } as Meta;

export const Primary: StoryObj<any> = {
  render: (props) => {
    const mapRef = useRef();

    const coordinates = [[
      [-122.4752749, 37.7500271],
      [-122.4055804, 37.7363170],
      [-122.3909033, 37.7881577],
      [-122.4775065, 37.7882933]
    ]];
    const style = { 
      fill: new Fill({color: 'rgba(210, 12, 12, 0.5)'}) 
    }
    const center = fromLonLat([-122.42, 37.779]);
    useEffect(() => {
      setTimeout(() => window.map = mapRef.current, 1000)
    }, []);

    return (
      <Map ref={mapRef}>
        <TileLayer source={new OSM()} />
        <View center={center} zoom={12}/>
        <Polygon coordinates={coordinates} style={style} />
      </Map>
    );
  }
}