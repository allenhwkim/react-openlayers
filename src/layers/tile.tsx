import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';
import {Map} from '../map';

export class Tile extends React.Component<any, any> {

  layer: ol.layer.Tile;

  options: any = {
    zIndex: undefined,
    opacity: undefined,
    preload: undefined,
    source: undefined,
    visible: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    useInterimTilesOnError: undefined
  };

  events: any = {
    'change': undefined,
    'change:extent': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:preload': undefined,
    'change:source': undefined,
    'change:useInterimTilesOnError': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) {
    super(props);
    console.log('Tile constructor');
  }

  render() {
    return null;
    console.log('Tile render() .....');
  }

  componentDidMount () {
    console.log('Tile componentDidMount() .....');
    let options = Util.getOptions(Object.assign(this.options, this.props));
    options.source = options.source || new ol.source.OSM();
    this.layer = new ol.layer.Tile(options);
    if(this.props.zIndex){
      this.layer.setZIndex(this.props.zIndex);
    }
    this.context.mapComp.layers.push(this.layer)

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.layer.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('Tile componentWillReceiveProps() .....');
    if(nextProps !== this.props){
      let options = Util.getOptions(Object.assign(this.options, this.props));
      this.context.mapComp.map.removeLayer(this.layer);
      this.layer = new ol.layer.Tile(options);
      if(this.props.zIndex){
        this.layer.setZIndex(this.props.zIndex);
      }
      this.context.mapComp.map.addLayer(this.layer);

      let olEvents = Util.getEvents(this.events, this.props);
      for(let eventName in olEvents) {
        this.layer.on(eventName, olEvents[eventName]);
      }
    }
  }
  
  componentWillUnmount () {
    this.context.mapComp.map.removeLayer(this.layer);
  }

}

Tile['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map)
};
