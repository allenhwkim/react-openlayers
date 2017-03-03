import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';

export class ZoomToExtent extends React.Component<any, any> {

  control: ol.control.ZoomToExtent;

  options: any = {
    className: undefined,
    target: undefined,
    label: undefined,
    tipLabel: undefined,
    extent: undefined
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
    this.control = new ol.control.ZoomToExtent(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

ZoomToExtent['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
