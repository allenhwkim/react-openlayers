import {Interactions} from './interactions';
import {Select} from './select';
import {Draw} from './draw';
import {Modify} from './modify';

let interaction = {
  Select: Select,
  Draw: Draw,
  Modify: Modify
};

export {
  Interactions,
  interaction
};

