import * as React from 'react';
import {Link} from 'react-router';

export {Attribution} from './attribution';
export {FullScreen} from './full-screen';
export {MousePosition} from './mouse-position';
export {OverviewMap} from './overview-map';
export {Rotate} from './rotate';
export {ScaleLine} from './scale-line';
export {ZoomSlider} from './zoom-slider';
export {ZoomToExtent} from './zoom-to-extent';
export {Zoom} from './zoom';

export class Controls extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Controls</h1>
        <ul role="nav" className="group-menu">
          <li><Link to="controls/attribution">Attribution</Link></li>
          <li><Link to="controls/full-screen">FullScreen</Link></li>
          <li><Link to="controls/mouse-position">MousePosition</Link></li>
          <li><Link to="controls/overview-map">OverviewMap</Link></li>
          <li><Link to="controls/rotate">Rotate</Link></li>
          <li><Link to="controls/scale-line">ScaleLine</Link></li>
          <li><Link to="controls/zoom-slider">ZoomSlider</Link></li>
          <li><Link to="controls/zoom-to-extent">ZoomToExtent</Link></li>
          <li><Link to="controls/zoom">Zoom</Link></li>
        </ul>
        
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}