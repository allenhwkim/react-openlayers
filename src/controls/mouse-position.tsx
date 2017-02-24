import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from '../util';

export class MousePosition extends React.Component<any, any> {

  control: ol.control.MousePosition;

  options: any = {
    className: undefined,
    coordinateFormat: undefined,
    projection: undefined,
    render: undefined,
    target: undefined,
    undefinedHTML: undefined
  };

  events: any = {
    'change': undefined,
    'change:coordinateFormat': undefined,
    'change:projection': undefined,
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
    this.control = new ol.control.MousePosition(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

MousePosition['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
