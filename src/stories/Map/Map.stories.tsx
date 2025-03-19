import { OSM } from 'ol/source';
import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Map, TileLayer, View } from '../../lib';

export default { title: 'Map' } as Meta;
declare let window:any;

export const Primary: StoryObj<any> = {
  render: () => {
    return <Map style={{filter:'invert(1)'}} />;
  }
}