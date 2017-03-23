import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";


var iconFeature = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.transform([-72.0704, 46.678], 'EPSG:4326','EPSG:3857')
    ),
    name: 'Null Island'
  })
var source = new ol.source.Vector({features: [iconFeature]});
var marker = new custom.style.MarkerStyle(
  'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
);

export class GeoCoder extends React.Component<any,any> {
  geocodeControl: any;

  constructor(props) {
    super(props);
  }

  geocode = event => {
    let lat = parseFloat(event.detail.lat), lon = parseFloat(event.detail.lon);
    let point = new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326','EPSG:3857'));
    let feature = new ol.Feature({geometry: point, name: 'foo'});
    source.clear();
    source.addFeature(feature);
    this.geocodeControl.locate({lon: lon, lat: lat, duration: 2000});
  }

  render(){
    return (
      <div>
        This uses <a href="https://github.com/allenhwkim/geocoder">geo-coder;</a>
        <Map>
          <Layers>
            <layer.Tile/>
            <layer.Vector 
              style={marker.style}
              source={source}/>
          </Layers>
          <Controls>
            <custom.control.GeoCoderComponent
              ref={comp => this.geocodeControl = comp.control}
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