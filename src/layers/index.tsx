import {Tile} from './tile';
import {Vector} from './vector';
import {Layers} from './layers';
import {Heatmap} from './heatmap';
import {Image} from './image';
import {VectorTile} from './vector-tile';

let layer = {
  Tile: Tile,
  Vector: Vector,
  Heatmap: Heatmap,
  Image: Image,
  VectorTile: VectorTile,
};

export { 
  Layers,
  layer,
  Heatmap,
  Image,
  VectorTile
};
