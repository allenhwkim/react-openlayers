import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

export class FullScreen extends React.Component<any,any> {
  constructor(props) {super(props);} 

  render(){
    return (
      <div>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/controls/full-screen.tsx">source</a>
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.FullScreen />
          </Controls>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/controls/full-screen.tsx">source</a>
        <pre>{`
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <control.FullScreen />
          </Controls>
        </Map>
        `}</pre>
      </div>
    );
  }
}