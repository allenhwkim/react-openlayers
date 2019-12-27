import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

export class MousePosition extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.MousePosition />
          </Controls>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/controls/mouse-position.tsx">source</a>
        <pre>{`
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.MousePosition />
          </Controls>
        </Map>
        `}</pre>
      </div>
    );
  }
}