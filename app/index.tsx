import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {App} from './app';

import {Controls} from './controls/controls';
import {Attribution} from './controls/attribution';
import {FullScreen} from './controls/full-screen';
import {MousePosition} from './controls/mouse-position';
import {OverviewMap} from './controls/overview-map';
import {Rotate} from './controls/rotate';
import {ScaleLine} from './controls/scale-line';
import {ZoomSlider} from './controls/zoom-slider';
import {ZoomToExtent} from './controls/zoom-to-extent';
import {Zoom} from './controls/zoom';

import {Layers} from './layers/layers';
import {Tile} from './layers/tile';
import {Vector} from './layers/vector';
import {Heatmap} from './layers/heatmap';
import {Image} from './layers/image';
import {VectorTile} from './layers/vector-tile';
import {OSMVectorTiles} from './layers/osm-vector-tiles';

import {Interactions} from './interactions/interactions';
import {Select} from './interactions/select';
import {Draw} from './interactions/draw';
import {Modify} from './interactions/modify';

import {Overlays} from './overlays/overlays';
import {AppOverlay}  from './overlays/app-overlay';

import {Custom} from './custom/custom';
import {EarthquakeClusters} from './custom/earthquake-clusters';
import {MarkerStyle} from './custom/marker-style';
import {GoogleStreetViewPanorama} from './custom/google-street-view-panorama';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={EarthquakeClusters} />
      <Route path="controls" component={Controls}>
        <IndexRoute component={Attribution} />
        <Route path="attribution" component={Attribution} />
        <Route path="full-screen" component={FullScreen} />
        <Route path="mouse-position" component={MousePosition} />
        <Route path="overview-map" component={OverviewMap} />
        <Route path="rotate" component={Rotate} />
        <Route path="scale-line" component={ScaleLine} />
        <Route path="zoom-slider" component={ZoomSlider} />
        <Route path="zoom-to-extent" component={ZoomToExtent} />
        <Route path="zoom" component={Zoom} />
      </Route>
      <Route path="layers" component={Layers}>
        <IndexRoute component={Tile} />
        <Route path="tile" component={Tile} />
        <Route path="vector" component={Vector} />
        <Route path="heatmap" component={Heatmap} />
        <Route path="image" component={Image} />
        <Route path="vector-tile" component={VectorTile} />
        <Route path="osm-vector-tiles" component={OSMVectorTiles} />
      </Route>
      <Route path="interactions" component={Interactions}>
        <IndexRoute component={Select} />
        <Route path="select" component={Select} />
        <Route path="draw" component={Draw} />
        <Route path="modify" component={Modify} />
      </Route>
      <Route path="overlays" component={Overlays}>
        <IndexRoute component={AppOverlay} />
        <Route path="overlay" component={AppOverlay} />
      </Route>
      <Route path="custom" component={Custom}>
        <IndexRoute component={EarthquakeClusters} />
        <Route path="earthquake-clusters" component={EarthquakeClusters} />
        <Route path="marker-style" component={MarkerStyle} />
        <Route path="google-street-view-panorama" component={GoogleStreetViewPanorama} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
