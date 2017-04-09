import {DoubleClickZoom} from './double-click-zoom';
import {DragAndDrop} from './drag-and-drop';
import {DragBox} from './drag-box';
import {DragPan} from './drag-pan';
import {DragRotate} from './drag-rotate';
import {DragRotateAndZoom} from './drag-rotate-and-zoom';
import {DragZoom} from './drag-zoom';
import {Draw} from './draw';
import {Extent} from './extent';
import {Interactions} from './interactions';
import {KeyboardPan} from './keyboard-pan';
import {KeyboardZoom} from './keyboard-zoom';
import {Modify} from './modify';
import {MouseWheelZoom} from './mouse-wheel-zoom';
import {PinchRotate} from './pinch-rotate';
import {PinchZoom} from './pinch-zoom';
import {Pointer} from './pointer';
import {Select} from './select';
import {Snap} from './snap';
import {Translate} from './translate';

let interaction = {
  DoubleClickZoom: DoubleClickZoom,
  DragAndDrop: DragAndDrop,
  DragBox: DragBox,
  DragPan: DragPan,
  DragRotate: DragRotate,
  DragRotateAndZoom: DragRotateAndZoom,
  DragZoom: DragZoom,
  Draw: Draw,
  Extent: Extent,
  KeyboardPan: KeyboardPan,
  KeyboardZoom: KeyboardZoom,
  Modify: Modify,
  MouseWheelZoom: MouseWheelZoom,
  PinchRotate: PinchRotate,
  PinchZoom: PinchZoom,
  Pointer: Pointer,
  Select: Select,
  Snap: Snap,
  Translate: Translate
};

export {
  Interactions,
  interaction
};

