import {Tile} from './tile';
import {Vector} from './vector';
import {Layers} from './layers';
import {Heatmap} from './heatmap';
import {Image} from './image';

let layer = {
  Tile: Tile,
  Vector: Vector,
  Heatmap: Heatmap,
  Image: Image
};

export { 
  Layers,
  layer,
  Heatmap,
  Image
};
