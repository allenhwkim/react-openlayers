import * as React from 'react';
import * as ol from 'openlayers';
import {getOptions} from './util';
import {Layers} from './layers/layers';
import {layer} from './layers/layer';

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
    this.map = new ol.Map(options);
  }

  componentDidMount() {
    this.map.setTarget(this.mapDiv);
  }

  render() {
    return (
      <div>
        <div className="openlayers-map" ref={(el)=> this.mapDiv = el}>
          {this.props.children}
          {this.isLayersDefinedByUser() ? '':
            <Layers>
              <layer.Tile source={new ol.source.OSM()} />
            </Layers>
          }
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

  // Ref. https://facebook.github.io/react/docs/context.html#how-to-use-context
  getChildContext(): any {
    return { map: this.map }
  }

  private isLayersDefinedByUser(): boolean {
    let children = React.Children.toArray(this.props.children);
    let layers: any ;
    for (let i=0; i<children.length; i++) {
      let child: any = children[i];
      if (child.type.name == 'Layers'){
        layers = child;
        break;
      }
    }
    return !!layers;
  }
}

// Ref. https://facebook.github.io/react/docs/context.html#how-to-use-context
Map['childContextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};

