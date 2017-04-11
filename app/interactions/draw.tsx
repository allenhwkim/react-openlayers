import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

var rasterTile = new ol.source.OSM();

var vectorSource = new ol.source.Vector({wrapX: false});

export class Draw extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  drawend(e) {
    console.log('xxxxxxxxxxxxx, draw end', e);
  }
  
  render() {
    var typeSelect = document.getElementById('type');

    return (
      <div>
        <Map view={{center: [-11000000, 4600000], zoom: 4}}>
          <Layers>
            <layer.Tile source={rasterTile} />
            <layer.Vector source={vectorSource} />
          </Layers>
          <Interactions>
            <interaction.Draw 
              onDrawend={this.drawend}
              source={vectorSource}
              type='Circle' />
          </Interactions>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/interactions/draw.tsx">source</a>
        <pre>{`
        `}</pre>
      </div>
    );
  }
}