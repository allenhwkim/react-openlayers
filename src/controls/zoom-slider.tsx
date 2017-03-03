import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';

export class ZoomSlider extends React.Component<any, any> {

  control: ol.control.ZoomSlider;

  options: any = {
    duration: undefined,
    className: undefined,
    maxResolution: undefined,
    minResolution: undefined,
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
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new ol.control.ZoomSlider(options);
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }
}

ZoomSlider['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
