import React from 'react';
import ReactDOM from 'react-dom';

import asyncLoading from 'react-async-loader';

class GoogleStreetViewPanorama extends React.Component {

  constructor() {
    super();
    this.state = {
      streetView: null,
      domElementId: 'street-view-' + Math.floor(Math.random() * 1000000) 
    };
  }

  initialize (canvas) {
    if (this.props.googleMaps && this.state.streetView == null) {
      const googleMaps = this.props.googleMaps;

      this.state.streetView = new googleMaps.StreetViewPanorama(
        canvas,
        this.props.streetViewPanoramaOptions
      );
    }
  }

  componentDidMount () {
    this.initialize(ReactDOM.findDOMNode(this));
  }

  componentDidUpdate () {
    this.initialize(ReactDOM.findDOMNode(this));
  }
    
  
  render () {
    return <div
      style = {{
        height: '100%'
      }}
      id = {this.state.domElementId}
    ></div>;
  }
}

GoogleStreetViewPanorama.propTypes = {
  streetViewPanoramaOptions: React.PropTypes.object.isRequired
};

GoogleStreetViewPanorama.defaultProps = {
  streetViewPanoramaOptions : {
    position: {lat: 46.9171876, lng: 17.8951832},
    pov: {heading: 0, pitch: 0},
    zoom: 1
  }
};

function mapScriptsToProps (props) {
  const googleMapsApiKey = props.apiKey || GoogleStreetViewPanorama.apiKey;
  return {
    googleMaps: {
      globalPath: 'google.maps',
      url: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey,
      jsonp: true
    }
  };
}

export default asyncLoading(mapScriptsToProps)(GoogleStreetViewPanorama);
