import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from "../util";
import {Map} from '../map';

export class DoubleClickZoom extends React.Component<any, any> {

  interaction: ol.interaction.DoubleClickZoom;

  options: any = {
    duration: undefined,
    delta: undefined
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
    console.log('double-click-zoom options', options);
    this.interaction = new ol.interaction.DoubleClickZoom(options);
    this.context.mapComp.interactions.push(this.interaction)
  }

}

DoubleClickZoom['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};