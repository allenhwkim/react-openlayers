import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from '../util';

export class Zoom extends React.Component<any, any> {

  control: ol.control.Zoom;

  options: any = {
    duration: undefined,
    className: undefined,
    zoomInLabel: undefined,
    zoomOutLabel: undefined,
    zoomInTipLabel: undefined,
    zoomOutTipLabel: undefined,
    delta: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = getOptions(Object['assign'](this.options, this.props));
    this.control = new ol.control.Zoom(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

Zoom['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
