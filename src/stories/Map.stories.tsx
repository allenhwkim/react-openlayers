import * as ol from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import Map from '../lib/Map';
import { useRef } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Map',
  component: Map,
  tags: ['autodocs'],
  argTypes: {}, // https://storybook.js.org/docs/api/argtypes
  parameters: {
  },
}

const MapStory = (props) => {
  const map = useRef<ol.Map>();
 
  const showMap = () => {
    const view = new ol.View({ center: [0, 0], zoom: 2 });
    map.current.addLayer(new TileLayer({ source: new OSM() }));
    map.current.setView(view);
    console.info('react-openlayers: map instance', map.current);
  };

  return <div>
    <Map ref={map} />
    <button onClick={showMap}>Show Map</button>
  </div>
};
 
export const Primary = {
  args: {}, // https://storybook.js.org/docs/writing-stories/args
  render: MapStory
}