import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from '../util';

export class Attribution extends React.Component<any, any> {

  control: ol.control.Attribution;

  options: any = {
    className: undefined,
    target: undefined,
    collapsible: undefined,
    collapsed: undefined,
    tipLabel: undefined,
    label: undefined,
    collapseLabel: undefined,
    render: undefined
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
    this.control = new ol.control.Attribution(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

Attribution['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
