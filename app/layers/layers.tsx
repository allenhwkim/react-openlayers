import * as React from 'react';
import {Link} from 'react-router';
import {Tile} from './tile';
import {Vector} from './vector';
import {Heatmap} from './heatmap';
import {Image} from './image';

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
          <li><Link to="layers/vector">Vector</Link></li>
          <li><Link to="layers/heatmap">Heatmap</Link></li>
          <li><Link to="layers/image">Image</Link></li>
        </ul>
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}