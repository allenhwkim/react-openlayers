import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

export class AppOverlay extends React.Component<any,any> {
  overlayComp: any;
  popupComp: any;

  constructor(props) {
    super(props);
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
        <Map onClick={this.showPopup}>
          <Layers><layer.Tile/></Layers>
          <Overlays>
            <Overlay 
              ref={comp => this.overlayComp = comp}
              element="#popup" />
          </Overlays>
        </Map>
        <custom.Popup ref={comp => this.popupComp = comp}>
        </custom.Popup>
      </div>
    );
  }

}