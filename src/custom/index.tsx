import {Popup} from './popup';
import {GoogleStreetViewPanorama} from './google-street-view-panorama';
import {ClusterStyle} from './style/cluster-style';
import {MarkerStyle} from './style/marker-style';
import {GeoCoderControl} from './control/geo-coder-control';
import {GeoCoderComponent} from './control/geo-coder-component';

let custom = {
  style: {
    MarkerStyle: MarkerStyle,
    ClusterStyle: ClusterStyle
  },
  control: {
    GeoCoderControl: GeoCoderControl,
    GeoCoderComponent: GeoCoderComponent
  },
  Popup: Popup,
  GoogleStreetViewPanorama: GoogleStreetViewPanorama
};

export {custom};

