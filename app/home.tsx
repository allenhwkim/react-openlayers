import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

var source = new ol.source.Vector({
  features: [
    new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([-10, -10]))),
    new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([0, 0]))),
    new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([10, 10])))
  ]
});
var markerStyle = new custom.MarkerStyle();

export class Home extends React.Component<any,any> {

  constructor(props) {
    super(props);
  }

  render(){
    let tileSource = new ol.source.Stamen({ layer: 'watercolor' });
    return (
      <div>
        <h1>Map</h1>
        <ul className="group-menu"></ul>
        <div className="contents">
          <Map view={{center: [0, 0], zoom: 2}}>
            <Layers>
              <layer.Tile source={tileSource}/>
              <layer.Vector source={source} style={markerStyle.style} />
            </Layers>
          </Map>
          <pre>{`
          <Map view={{center: [0, 0], zoom: 2}}>
            <Layers>
              <layer.Tile source={tileSource}/>
              <layer.Vector source={this.markers} style={this.markers.style} />
            </Layers>
          </Map>
          `}</pre>
        </div>
      </div>
    );
  }
}