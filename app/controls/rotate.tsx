import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

export class Rotate extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.Rotate />
          </Controls>
        </Map>
        Use Alt+Shift+Drag to rotate the map.
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/controls/rotate.tsx">source</a>
        <pre>{`
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.Rotate />
          </Controls>
        </Map>
        `}</pre>
      </div>
    );
  }
}