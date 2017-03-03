import * as React from 'react';
import {Link} from 'react-router';
import {Tile} from './tile';

export class Layers extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Controls</h1>
        <ul role="nav" className="group-menu">
          <li><Link to="layers/tile">Tile</Link></li>
        </ul>
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}