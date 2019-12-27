import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

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
  overlay: any;
  geoCoder: any;
  popup: any;

  constructor(props) {
    super(props);
  }

  showPopup = (evt) => {
    this.overlay.setPosition(evt.coordinate);
    var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
    this.geoCoder.reverse(lonlat[0], lonlat[1]).then(result => {
      console.log('address...............', result.address)
      this.popup.setContents(`<b>${result.address}</b>`);
      this.popup.show();
    });
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
        <Map onClick={this.showPopup}>
          <Layers>
            <layer.Tile/>
            <layer.Vector 
              style={marker.style}
              source={source}/>
          </Layers>
          <Controls>
            <custom.control.GeoCoderComponent
              ref={cmp => {
                console.log('cmp', cmp);
                this.geocodeControl = cmp && cmp.control;
                this.geoCoder = cmp && cmp.geoCoder;
              }}
              provider='osm'
              onPlace_changed={this.geocode} />
          </Controls>
          <Overlays>
            <Overlay ref={cmp => this.overlay = cmp && cmp.overlay}>
              <custom.Popup ref={cmp => this.popup = cmp}></custom.Popup>
            </Overlay>
          </Overlays>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/custom/geo-coder.tsx">source</a>
        <pre>{`
        `}</pre>
      </div>
    );
  }
}