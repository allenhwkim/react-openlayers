import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

export class Home extends React.Component<any,any> {
  overlayComp: any;
  popupComp: any;
  selectedMarkerStyle: any;
  markers: any;

  constructor(props) {
    super(props);
    let positions = [ [-20, -20], [-10,-10], [0,0], [10,10], [20,20] ];
    this.markers = new custom.Marker({positions: positions});
  }

  render(){
    return (
      <div>
        <h1>Map</h1>
        <ul className="group-menu"></ul>
        <div className="contents">
          <Map view={{center: [0, 0], zoom: 2}}>
            <Layers>
              <layer.Tile/>
              <layer.Vector source={this.markers} style={this.markers.style} />
            </Layers>
          </Map>
          <pre>{`
            <Map view={{center: [0, 0], zoom: 2}}>
              <Layers>
                <layer.Tile/>
                <layer.Vector source={this.markers} style={this.markers.style} />
              </Layers>
            </Map>
          `}</pre>
        </div>
      </div>
    );
  }
}