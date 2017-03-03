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
    this. markers = new custom.Marker({positions: positions});
    this.selectedMarkerStyle = Util.cloneObject(this.markers.style);
    this.selectedMarkerStyle.getImage().setOpacity(1);
  }

  showPopup(evt) {
    let feature = evt.map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => feature );
    let overlayPosition = feature ? 
      feature.getGeometry().getCoordinates() : evt.coordinate;
    this.overlayComp.overlay.setPosition(overlayPosition);

    var lonlat = ol.proj.transform(overlayPosition, 'EPSG:3857', 'EPSG:4326');

    this.popupComp.setContents(
      `<p>You clicked here:</p><code> ${lonlat[0]}, ${lonlat[1]}</code>`
    );
    this.popupComp.show(feature);
  }

  render(){
    return (
      <div>
        <Map view={{center: [0, 0], zoom: 2}} onClick={this.showPopup}>
          <Layers>
            <layer.Tile/>
            <layer.Vector source={this.markers} style={this.markers.style} />
          </Layers>
          <Overlays>
            <Overlay 
              ref={comp => this.overlayComp = comp}
              element="#popup" />
          </Overlays>
          <Controls attribution={false} zoom={true}>
            <control.Rotate />
            <control.ScaleLine />
            <control.FullScreen />
            <control.OverviewMap />
            <control.ZoomSlider />
            <control.ZoomToExtent />
            <control.Zoom />
          </Controls>
          <Interactions>
            <interaction.Select style={this.selectedMarkerStyle} />
            <interaction.Draw source={this.markers} type='Point' />
            <interaction.Modify features={this.markers.features} />
          </Interactions>
        </Map>

        <custom.Popup ref={comp => this.popupComp = comp}>
        </custom.Popup>
      </div>
    );
  }
}