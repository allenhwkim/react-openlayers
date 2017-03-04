import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {App} from './app';
import {Home} from './home';

import {Controls} from './controls/controls';
import {Attribution} from './controls/attribution';

import {Layers} from './layers/layers';
import {Tile} from './layers/tile';
import {Vector} from './layers/vector';

import {Interactions} from './interactions/interactions';
import {Select} from './interactions/select';
import {Draw} from './interactions/draw';
import {Modify} from './interactions/modify';

import {Overlays} from './overlays/overlays';
import {AppOverlay}  from './overlays/app-overlay';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="controls" component={Controls}>
        <IndexRoute component={Attribution} />
        <Route path="attribution" component={Attribution} />
      </Route>
      <Route path="layers" component={Layers}>
        <IndexRoute component={Tile} />
        <Route path="tile" component={Tile} />
        <Route path="vector" component={Vector} />
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
    </Route>
  </Router>
), document.getElementById('app'));