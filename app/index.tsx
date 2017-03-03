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

import {Interactions} from './interactions/interactions';
import {Select} from './interactions/select';

import {Overlays} from './overlays/overlays';
import {AppOverlay}  from './overlays/overlay';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="controls" component={Controls}>
        <Route path="attribution" component={Attribution} />
      </Route>
      <Route path="layers" component={Layers}>
        <Route path="tile" component={Tile} />
      </Route>
      <Route path="interactions" component={Interactions}>
        <Route path="select" component={Select} />
      </Route>
      <Route path="overlays" component={Overlays}>
        <Route path="overlay" component={AppOverlay} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));