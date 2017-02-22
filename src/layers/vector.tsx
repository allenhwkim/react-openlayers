import * as React from 'react';
import * as ol from 'openlayers';
import {custom} from '../custom/custom';
import {getOptions} from "../util";

export class Vector extends React.Component<any, any> {

  layer: ol.layer.Vector;

  options: any = {
    renderOrder: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    opacity: undefined,
    renderBuffer: undefined,
    source: undefined,
    style: undefined,
    updateWhileAnimating: undefined,
    updateWhileInteracting: undefined,
    visible: undefined
  };

  events: any = {
    'change': undefined,
    'change:extent': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:preload': undefined,
    'change:source': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = getOptions(Object.assign(this.options, this.props));
    this.layer = new ol.layer.Vector(options);
    this.context.map.addLayer(this.layer)
  }

  componentWillUnmount () {
    this.context.map.removeLayer(this.layer)
  }
}

Vector['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
