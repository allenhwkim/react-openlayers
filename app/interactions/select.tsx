import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

let positions = [ [-20, -20], [-10,-10], [0,0], [10,10], [20,20] ];
let markers = new custom.Marker({positions: positions});
let selectedMarkerStyle = Util.cloneObject(markers.style);
selectedMarkerStyle.getImage().setOpacity(1);

export class Select extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector source={markers} style={markers.style} />
          </Layers>
          <Interactions>
            <interaction.Select style={selectedMarkerStyle} />
          </Interactions>
        </Map>
        <pre>{`
          <Map>
            <Layers>
              <layer.Tile />
              <layer.Vector source={markers} style={markers.style} />
            </Layers>
            <Interactions>
              <interaction.Select style={selectedMarkerStyle} />
            </Interactions>
          </Map>
        `}</pre>
      </div>
    );
  }
}