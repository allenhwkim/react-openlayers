import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from "../util";
import {Map} from '../map';

export class PinchRotate extends React.Component<any, any> {

  interaction: ol.interaction.PinchRotate;

  options: any = {
    duration: undefined,
    threshold: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.interaction = new ol.interaction.PinchRotate(options);
    this.context.mapComp.interactions.push(this.interaction)
  }

}

PinchRotate['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};