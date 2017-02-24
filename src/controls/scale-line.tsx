import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from '../util';

export class ScaleLine extends React.Component<any, any> {

  control: ol.control.ScaleLine;

  options: any = {
    className: undefined,
    minWidth: undefined,
    render: undefined,
    target: undefined,
    units: undefined
  };

  events: any = {
    'change': undefined,
    'change:units': undefined,
    'propertychange': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = getOptions(Object.assign(this.options, this.props));
    this.control = new ol.control.ScaleLine(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

ScaleLine['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
