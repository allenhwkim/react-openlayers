import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';

import {Map, Layers, layer, custom} from "react-openlayers";

let positions = [ [-20, -20], [-10,-10], [0,0], [10,10], [20,20] ];
let markers = new custom.Marker({positions: positions});

ReactDOM.render(
  <div>
    <Map>
      <Layers>
        <layer.Tile source={new ol.source.OSM()}/>
        <layer.Vector source={markers} style={markers.style} />
      </Layers>
      {/*<Controls></Controls>*/}
      {/*<Interactions></Interactions>*/}
      {/*<Overlays></Overlays>*/}
    </Map>
  </div>,
  document.getElementById("example")
);