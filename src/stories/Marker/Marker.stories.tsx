import { OSM } from 'ol/source';
import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Map, TileLayer, View } from '../../lib';
import { Marker } from '../../lib/Marker';

export default { title: 'Marker' } as Meta;
declare let window:any;

export const Primary: StoryObj<any> = {
  render: (props) => {
    const mapRef = useRef();

    return (
      <Map ref={mapRef}>
        <TileLayer source={new OSM()} />
        <View center={[0,0]} zoom={4}/>
        <Marker lonLat={[0,0]} color="blue" />
      </Map>
    );
  }
}