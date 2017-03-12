import * as React from 'react';
import {Link} from 'react-router';
import {EarthquakeClusters} from './earthquake-clusters';
import {MarkerStyle} from './marker-style';

export class Custom extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Customized Examples</h1>
        <ul role="nav" className="group-menu">
          <li><Link to="custom/earthquake-clusters">Earthquake Clusters</Link></li>
          <li><Link to="custom/marker-style">Marker Style</Link></li>
          <li><Link to="custom/google-street-view-panorama">Google StreetView Panorama</Link></li>
        </ul>
        
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}