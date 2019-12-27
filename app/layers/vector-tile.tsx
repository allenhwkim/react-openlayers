import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import * as olms from 'ol-mapbox-style'; // in case we use olms
import * as qwest from 'qwest';          // in case we need to do ajax call
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

import {createMapboxStreetsV6Style} from './mapbox-streets-v6-style';

var key = 'pk.eyJ1IjoiYWxsZW5od2tpbSIsImEiOiJjajBlbzkzazYwMWh1Mndya3R2amw0ang1In0.QU0YtPQ0-IgHMLt574HGlw';
var source = new ol.source.VectorTile({
  projection: undefined,
  attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
    '© <a href="https://www.openstreetmap.org/copyright">' +
    'OpenStreetMap contributors</a>',
  format: new ol.format.MVT(),
  tileGrid: ol.tilegrid.createXYZ({maxZoom: 22}),
  tilePixelRatio: 16,
  url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
      '{z}/{x}/{y}.vector.pbf?access_token=' + key
});

export class VectorTile extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    let style = createMapboxStreetsV6Style();
    return (
      <div>
        <Map view={{center: [0,0], zoom:2}}>
          <Layers>
            <layer.VectorTile source={source} style={createMapboxStreetsV6Style()} />
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/layers/vector-tile.tsx">Source Code</a>
        <pre>{`
        <Map view={{center: [0,0], zoom:2}}>
          <Layers>
            <layer.VectorTile source={source} style={createMapboxStreetsV6Style()} />
          </Layers>
        `}</pre>
      </div>
    );
  }
}

