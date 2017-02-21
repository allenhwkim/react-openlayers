import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';

import { Map, Layers, layer } from "react-openlayer";

ReactDOM.render(
  <div>
    <Map>
      <Layers>
        <layer.Tile />
        <layer.Vector />
      </Layers>
      {/*<Controls></Controls>*/}
      {/*<Interactions></Interactions>*/}
      {/*<Overlays></Overlays>*/}
    </Map>
  </div>,
  document.getElementById("example")
);