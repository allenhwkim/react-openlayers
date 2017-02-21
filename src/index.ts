import {Map} from  './map';

import {Tile} from './layers/tile';
import {Layers} from './layers/layers';
import {Vector} from './layers/vector';

import {getIcon} from './defaults/icon';

let layer = {
  Tile: Tile,
  Vector: Vector
};

let defaults = {
  getIcon: getIcon
};

export {
  Map,
  Layers,
  layer,
  defaults
};
