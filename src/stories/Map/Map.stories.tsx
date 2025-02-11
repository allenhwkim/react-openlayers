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
declare let window:any;

export const Primary: StoryObj<any> = {
  render: (props) => {
    const mapRef = useRef();


    setTimeout(() => {
      window.map=mapRef.current;
      console.log({map: window.map});
    }, 1000);

    return <Map ref={mapRef}>
      <TileLayer source={new OSM()} />
      <View center={[0,0]} zoom={4}/>
    </Map>
  }
}