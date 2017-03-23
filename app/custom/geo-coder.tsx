import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

export class GeoCoder extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        This uses <a href="https://github.com/allenhwkim/geocoder">geo-coder;</a>
        <Map>
          <Layers><layer.Tile/></Layers>
          <Controls>
            <custom.control.GeoCoderComponent
              provider='osm'
              onPlace_changed={this.geocode} />
          </Controls>
        </Map>
        <pre>{`
        `}</pre>
      </div>
    );
  }
}