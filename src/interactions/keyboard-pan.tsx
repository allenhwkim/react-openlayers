import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from "../util";
import {Map} from '../map';

export class KeyboardPan extends React.Component<any, any> {

  interaction: ol.interaction.KeyboardPan;

  options: any = {
    condition: undefined,
    duration: undefined,
    pixelDelta: undefined
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
    this.interaction = new ol.interaction.KeyboardPan(options);
    this.context.mapComp.interactions.push(this.interaction)
  }

}

KeyboardPan['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};