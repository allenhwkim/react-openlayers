import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

var vectorSource= new ol.source.Cluster({
  distance: 40,
  source: new ol.source.Vector({
    url: 'https://openlayers.org/en/latest/examples/kml-earthquakes.html',
    format: new ol.format.KML({
      extractStyles: false
    })
  })
});

var tileSource = new ol.source.Stamen({
  layer: 'toner'
});

var selectCondition = function(evt) {
  return evt.originalEvent.type == 'mousemove' ||
    evt.type == 'singleclick';
};

var cluster = new custom.style.ClusterStyle(vectorSource);

export class EarthquakeClusters extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Map view={{center: [0,0], zoom:2}}>
          <Interactions>
            <interaction.Select
             condition={selectCondition} 
             style={cluster.selectStyleFunction} />
          </Interactions>
          <Layers>
            <layer.Tile source={tileSource}/>
            <layer.Vector 
              source={vectorSource} 
              style={cluster.vectorStyleFunction}/>
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/custom/earthquake-clusters.tsx">source</a>
        This example parses a KML file and renders the features as clusters on a vector layer. The styling in this example is quite involved. Single earthquake locations (rendered as stars) have a size relative to their magnitude. Clusters have an opacity relative to the number of features in the cluster, and a size that represents the extent of the features that make up the cluster. When clicking or hovering on a cluster, the individual features that make up the cluster will be shown.
        To achieve this, we make heavy use of style functions and ol.style.Style#geometry.
        <pre>{`
        <Map view={{center: [0,0], zoom:2}}>
          <Interactions>
            <interaction.Select
             condition={selectCondition} 
             style={cluster.selectStyleFunction} />
          </Interactions>
          <Layers>
            <layer.Tile source={tileSource}/>
            <layer.Vector 
              source={vectorSource} 
              style={cluster.vectorStyleFunction}/>
          </Layers>
        </Map>
        `}</pre>
      </div>
    );
  }
}