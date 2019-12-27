import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
}  from "../../src/index";

var iconFeature = new ol.Feature(new ol.geom.Point([0, 0]));
var source = new ol.source.Vector({features: [iconFeature]});
var marker = new custom.style.MarkerStyle(
  'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
);

export class MarkerStyle extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector 
              style={marker.style}
              source={source}/>
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/custom/marker-style.tsx">source</a>
        <pre>{`
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector 
              style={marker.style}
              source={source}/>
          </Layers>
        </Map>
        `}</pre>
      </div>
    );
  }
}