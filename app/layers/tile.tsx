import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

export class Tile extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile source={new ol.source.Stamen({ layer: 'watercolor' })}/>
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/layers/tile.tsx">Source Code</a>
        <pre>{`
        <Map>
          <Layers>
            <layer.Tile source={new ol.source.Stamen({ layer: 'watercolor' })}/>
          </Layers>
        </Map>
        `}</pre>
      </div>
    );
  }
}