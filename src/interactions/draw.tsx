import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from "../util";

export class Draw extends React.Component<any, any> {

  interaction: ol.interaction.Draw;

  options: any = {
    clickTolerance: undefined,
    features: undefined,
    source: undefined,
    snapTolerance: undefined,
    type: undefined,
    maxPoints: undefined,
    minPoints: undefined,
    finishCondition: undefined,
    style: undefined,
    geometryFunction: undefined,
    geometryName: undefined,
    condition: undefined,
    freehand: undefined,
    freehandCondition: undefined,
    wrapX: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'drawend': undefined,
    'drawstart': undefined,
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
    this.interaction = new ol.interaction.Draw(options);
    this.context.map.addInteraction(this.interaction)
  }

  componentWillUnmount () {
    this.context.map.removeInteraction(this.interaction)
  }
}

Draw['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
