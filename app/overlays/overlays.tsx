import * as React from 'react';
import {Link} from 'react-router';
import {AppOverlay} from './overlay';

export class Overlays extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Controls</h1>
        <ul role="nav">
          <li><Link to="overlays/overlay">Overlay</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}
