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
var markerStyle = new custom.style.MarkerStyle();

export class Draw extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector source={source} style={markerStyle.style} />
          </Layers>
          <Interactions>
            <interaction.Draw source={source} type='Point' />
          </Interactions>
        </Map>
        <pre>{`
          <Map>
            <Layers>
              <layer.Tile />
              <layer.Vector source={markers} style={markers.style} />
            </Layers>
            <Interactions>
              <interaction.Draw source={markers} type='Point' />
            </Interactions>
          </Map>
        `}</pre>
      </div>
    );
  }
}