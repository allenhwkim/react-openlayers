import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
}  from "../../src/index";

var source = new ol.source.Vector({
  url: 'https://rawgit.com/boundlessgeo/ol3-workshop/master/src/data/layers/7day-M2.5.json',
  format: new ol.format.GeoJSON()
});
var style = new ol.style.Style({
  image: new ol.style.Circle({
    radius: 7,
    fill: new ol.style.Fill({ color: [0, 153, 255, 1] }),
    stroke: new ol.style.Stroke({ color: [255, 255, 255, 0.75], width: 1.5 })
  }),
  zIndex: 100000
});
var select = new ol.interaction.Select({style: style});

export class Modify extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector source={source} style={style} />
          </Layers>
          <Interactions>
            <interaction.Select instance={select} />
            <interaction.Modify features={select.getFeatures()} /> 
          </Interactions>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/interactions/modify.tsx">source</a>
        <pre>{`
          <Map>
            <Layers>
              <layer.Tile />
              <layer.Vector source={source} style={style} />
            </Layers>
            <Interactions>
              <interaction.Select instance={select} />
              <interaction.Modify features={select.getFeatures()} /> 
            </Interactions>
          </Map>
        `}</pre>
      </div>
    );
  }
}