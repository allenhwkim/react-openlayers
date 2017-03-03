import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';

export class OverviewMap extends React.Component<any, any> {

  control: ol.control.OverviewMap;

  options: any = {
    collapsed: undefined,
    collapseLabel: undefined,
    collapsible  : undefined,
    label: undefined,
    layers: undefined,
    render: undefined,
    target: undefined,
    tipLabel: undefined,
    view: undefined
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
    this.control = new ol.control.OverviewMap(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

OverviewMap['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
