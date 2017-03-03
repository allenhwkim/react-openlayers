import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';

export class Rotate extends React.Component<any, any> {

  control: ol.control.Rotate;

  options: any = {
    className: undefined,
    label: undefined,
    tipLabel  : undefined,
    duration: undefined,
    autoHide: undefined,
    render: undefined,
    resetNorth: undefined,
    target: undefined
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
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new ol.control.Rotate(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

Rotate['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
