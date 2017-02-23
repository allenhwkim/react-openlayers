import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from './util';

export class Overlay extends React.Component<any, any> {

  overlay: ol.Overlay;

  options: any = {
    id: undefined,
    element: undefined,
    offset: undefined,
    position: undefined,
    stopEvent: undefined,
    insertFirst: undefined,
    autoPan: undefined,
    autoPanAnimation: undefined,
    autoPanMargin: undefined
  };

  events: any = {
    'change': undefined,
    'change:element': undefined,
    'change:map': undefined,
    'change:offset': undefined,
    'change:position': undefined,
    'change:positioning': undefined,
    'propertychange': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = getOptions( Object['assign'](this.options, this.props));
    if (typeof options.element === 'string') {
      options.element = document.querySelector(options.element);
    }
    this.overlay = new ol.Overlay(options);
    this.context.map.addOverlay(this.overlay);
  }

  componentWillUnmount () {
    this.context.map.removeOverlay(this.overlay)
  }
}

Overlay['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
