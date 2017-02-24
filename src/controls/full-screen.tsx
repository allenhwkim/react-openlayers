import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from '../util';

export class FullScreen extends React.Component<any, any> {

  control: ol.control.FullScreen;

  options: any = {
    className: undefined,
    label: undefined,
    labelActive: undefined,
    tipLabel: undefined,
    keys: undefined,
    target: undefined,
    source: undefined
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
    this.control = new ol.control.FullScreen(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

FullScreen['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
