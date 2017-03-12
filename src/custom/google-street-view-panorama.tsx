import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as GoogleMapsLoader from 'google-maps';

export class GoogleStreetViewPanorama extends React.Component<any, any> {
  streetView: any;

  constructor() {
    super();
  }

  render() {
    return (<div style={{height: '100%'}}></div>);
  }

  initialize() {
    GoogleMapsLoader.load(google => {
      this.streetView = new google.maps.StreetViewPanorama(
        ReactDOM.findDOMNode(this),
        this.props
      );
    });
  }

  componentDidMount () {
    this.initialize();
  }

  componentDidUpdate () {
    this.initialize();
  }
}

GoogleStreetViewPanorama['defaultProps'] = {
  streetViewPanoramaOptions : {
    position: {lat: 46.9171876, lng: 17.8951832},
    pov: {heading: 0, pitch: 0},
    zoom: 1
  }
};