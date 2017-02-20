import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';

import { Map, Layers, layer } from "react-openlayer";

ReactDOM.render(
  <div>
    <Map>
      {/*
       <Layers>
       <layer.Tile source={new ol.source.OSM()} />
       </Layers>
      */}
    </Map>
  </div>,
  document.getElementById("example")
);