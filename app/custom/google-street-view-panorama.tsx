import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';
import * as GoogleMapsLoader from 'google-maps';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";
// GoogleMapsLoader.KEY = 'qwertyuiopasdfghjklzxcvbnm';
// GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
// GoogleMapsLoader.LANGUAGE = 'fr';

export class GoogleStreetViewPanorama extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={{height: '500px'}}>
        <custom.GoogleStreetViewPanorama
          position={{lat: 43.6613184, lng: -79.3941086}}
          pov={{heading: 90, pitch: 10}}
          zoom={1} 
         />
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/custom/google-street-view-panorama.tsx">source</a>
        <pre>{`
        <custom.GoogleStreetViewPanorama
          position={{lat: 43.6613184, lng: -79.3941086}}
          pov={{heading: 90, pitch: 10}}
          zoom={1} 
         />
        `}</pre>
      </div>
    );
  }
}