import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {App} from './app';

import {
  Controls,
  Attribution,
  FullScreen,
  MousePosition,
  OverviewMap,
  Rotate,
  ScaleLine,
  ZoomSlider,
  ZoomToExtent,
  Zoom 
} from './controls'

import {
  Layers,
  Tile,
  Vector,
  Heatmap,
  Image,
  VectorTile,
  VectorTile2,
  OSMVectorTiles
} from './layers';

import {
  Interactions,
  Select, 
  Draw,
  Modify,
  DoubleClickZoom,
  DragAndDrop,
  DragBox,
  DragPan,
  DragRotateAndZoom,
  DragRotate,
  DragZoom,
  KeyboardPan,
  KeyboardZoom,
  MouseWheelZoom,
  PinchRotate,
  PinchZoom,
  Pointer,
  Snap,
  Translate
} from './interactions';

import {
  Overlays, 
  AppOverlay
} from './overlays';

import {
  Custom,
  EarthquakeClusters,
  MarkerStyle,
  GoogleStreetViewPanorama,
  GeoCoder
} from './custom';

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
        <Route path="vector-tile-2" component={VectorTile2} />
        <Route path="osm-vector-tiles" component={OSMVectorTiles} />
      </Route>
      <Route path="interactions" component={Interactions}>
        <IndexRoute component={Select} />
        <Route path="select" component={Select} />
        <Route path="draw" component={Draw} />
        <Route path="modify" component={Modify} />
        <Route path="double-click-zoom" component={DoubleClickZoom} />
        <Route path="drag-and-drop" component={DragAndDrop} />
        <Route path="drag-box" component={DragBox} />
        <Route path="drag-pan" component={DragPan} />
        <Route path="drag-rotate-and-zoom" component={DragRotateAndZoom} />
        <Route path="drag-rotate" component={DragRotate} />
        <Route path="drag-zoom" component={DragZoom} />
        <Route path="keyboard-pan" component={KeyboardPan} />
        <Route path="keyboard-zoom" component={KeyboardZoom} />
        <Route path="mouse-wheel-zoom" component={MouseWheelZoom} />
        <Route path="pinch-rotate" component={PinchRotate} />
        <Route path="pinch-zoom" component={PinchZoom} />
        <Route path="pointer" component={Pointer} />
        <Route path="snap" component={Snap} />
        <Route path="translate" component={Translate} />
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
        <Route path="geo-code" component={GeoCoder} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
