import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions, getEvents} from './util';
import {Layers} from './layers/layers';
import {layer} from './layers/index';

import './ol.css';
import './map.css';

/**
 * Implementation of ol.map https://openlayers.org/en/latest/apidoc/ol.Map.html
 *
 * example:
 * <Map view={{center: [0, 0], zoom: 1}}>
 *   <layers>
 *     <layer.Tile source={new ol.source.OSM()} />
 *     <layer.Vector options={}/>
 *   </layers>
 *   <controls></controls>
 *   <interactions></interactions>
 *   <overlays></overlays>
 * </Map>
 */
export class Map extends React.Component<any, any> {

  map: ol.Map;
  mapDiv: any;

  options: any = {
    pixelRation: undefined,
    keyboardEventTarget: undefined,
    loadTilesWhileAnimation: undefined,
    loadTilesWhileInteractiong: undefined,
    logo: undefined,
    renderer: undefined,
    view: new ol.View({center: [0, 0], zoom: 3}),
    controls: undefined,
    interactions: undefined,
    layers: undefined,
    overlays: undefined
  };

  events: any = {
    'change': undefined,
    'change:layerGroup': undefined,
    'change:size': undefined,
    'change:target': undefined,
    'change:view': undefined,
    'click': undefined,
    'dblclick': undefined,
    'moveend': undefined,
    'pointerdrag': undefined,
    'pointermove': undefined,
    'postcompose': undefined,
    'postrender': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'singleclick': undefined
  };

  /**
   * Component mounting LifeCycle; constructor, componentDidMount, and render
   * https://facebook.github.io/react/docs/react-component.html#mounting
   */
  constructor(props) {
    super(props);
    let options = getOptions(Object.assign(this.options, this.props));
    !(options.view instanceof ol.View) && (options.view = new ol.View(options.view));
    this.map = new ol.Map(options);
  }

  componentDidMount() {
    this.map.setTarget(this.mapDiv);
    this.registerEvents(this.events, this.props);
  }

  render() {
    return (
      <div>
        <div className="openlayers-map" ref={(el)=> this.mapDiv = el}>
          {this.props.children}
        </div>
      </div>
    );
  }

  /**
   * Component Updating LifeCycle
   * https://facebook.github.io/react/docs/react-component.html#updating
   */
  //componentWillReceiveProps(nextProps)
  //shouldComponentUpdate(nextProps, nextState)
  //componentWillUpdate(nextProps, nextState)
  //componentDidUpdate(prevProps, prevState)

  /**
   * Component Unmounting LifeCycle
   * https://facebook.github.io/react/docs/react-component.html#unmounting
   */
  componentWillUnmount() {
    this.map.setTarget(undefined)
  }

  /**
   * functions
   */
  private registerEvents(events, props) {
    let propEvents = getEvents(Object.assign(events, props));
    let toPropsKey = str => {
      return 'on' +
        str.replace(/(\:[a-z])/g, $1 => $1.toUpperCase())
        .replace(/^[a-z]/, $1 => $1.toUpperCase())
        .replace(':','')
    }

    let propEventMap = {};
    for(let key in events) {
      propEventMap[toPropsKey(key)] = key
    }
    console.log('propEventMap', propEventMap);

    for(let prop in events) {
      if (Object.keys(propEventMap).indexOf(prop) !== -1) {
        let eventName = propEventMap[prop];
        console.log('registering event', eventName, propEvents[prop]);
        this.map.on(eventName, propEvents[prop])
      }
    }

  }

  // Ref. https://facebook.github.io/react/docs/context.html#how-to-use-context
  getChildContext(): any {
    return { map: this.map }
  }

}

// Ref. https://facebook.github.io/react/docs/context.html#how-to-use-context
Map['childContextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
