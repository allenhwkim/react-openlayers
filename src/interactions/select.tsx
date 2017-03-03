import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from "../util";

export class Select extends React.Component<any, any> {

  interaction: ol.interaction.Select;

  options: any = {
    addCondition: undefined,
    condition: undefined,
    layers: undefined,
    style: undefined,
    removeCondition: undefined,
    toggleCondition: undefined,
    multi: undefined,
    features: undefined,
    filter: undefined,
    wrapX: undefined,
    hitTolerance: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined,
    'select': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.interaction = new ol.interaction.Select(options);
    this.context.map.addInteraction(this.interaction)
  }

  componentWillUnmount () {
    this.context.map.removeInteraction(this.interaction)
  }
}

Select['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
