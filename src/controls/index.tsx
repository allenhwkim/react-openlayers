import {ScaleLine} from './scale-line';
import {Attribution} from './attribution';
import {FullScreen} from './full-screen';
import {MousePosition} from './mouse-position';
import {OverviewMap} from './overview-map';
import {Rotate} from './rotate';
import {ZoomSlider} from './zoom-slider';
import {ZoomToExtent} from './zoom-to-extent';
import {Zoom} from './zoom';
import {Controls} from './controls';

let control = {
  ScaleLine: ScaleLine,
  Attribution: Attribution,
  FullScreen: FullScreen,
  MousePosition: MousePosition,
  OverviewMap: OverviewMap,
  Rotate: Rotate,
  ZoomSlider: ZoomSlider,
  ZoomToExtent: ZoomToExtent,
  Zoom: Zoom
};

export { 
  Controls,
  control
};
