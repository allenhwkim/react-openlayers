import * as React from 'react';
import {Link} from 'react-router';

export {Select} from './select';
export {Draw} from './draw';
export {Modify} from './modify';
export {DoubleClickZoom} from './double-click-zoom';
export {DragAndDrop} from './drag-and-drop';
export {DragBox} from './drag-box';
export {DragPan} from './drag-pan';
export {DragRotateAndZoom} from './drag-rotate-and-zoom';
export {DragRotate} from './drag-rotate';
export {DragZoom} from './drag-zoom';
export {KeyboardPan} from './keyboard-pan';
export {KeyboardZoom} from './keyboard-zoom';
export {MouseWheelZoom} from './mouse-wheel-zoom';
export {PinchRotate} from './pinch-rotate';
export {PinchZoom} from './pinch-zoom';
export {Pointer} from './pointer';
export {Snap} from './snap';
export {Translate} from './translate';

export class Interactions extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Interactions</h1>
        <ul role="nav" className="group-menu">
          <li><Link to="interactions/select">Select</Link></li>
          <li><Link to="interactions/draw">Draw</Link></li>
          <li><Link to="interactions/modify">Modify</Link></li>
          <li><Link to="interactions/double-click-zoom">DoubleClickZoom</Link></li>
          <li><Link to="interactions/drag-and-drop">DragAndDrop</Link></li>
          <li><Link to="interactions/drag-box">DragBox</Link></li>
          <li><Link to="interactions/drag-pan">DragPan</Link></li>
          <li><Link to="interactions/drag-rotate-and-zoom">DragRotateAndZoom</Link></li>
          <li><Link to="interactions/drag-rotate">DragRotate</Link></li>
          <li><Link to="interactions/drag-zoom">DragZoom</Link></li>
          <li><Link to="interactions/keyboard-pan">KeyboardPan</Link></li>
          <li><Link to="interactions/keyboard-zoom">KeyboardZoom</Link></li>
          <li><Link to="interactions/mouse-wheel-zoom">MouseWheelZoom</Link></li>
          <li><Link to="interactions/pinch-rotate">PinchRotate</Link></li>
          <li><Link to="interactions/pinch-zoom">PinchZoom</Link></li>
          <li><Link to="interactions/pointer">Pointer</Link></li>
          <li><Link to="interactions/snap">Snap</Link></li>
          <li><Link to="interactions/translate">Translate</Link></li>
        </ul>

        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}
