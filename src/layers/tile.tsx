import * as React from 'react';
import * as ol from 'openlayers';

export class Tile extends React.Component<any, any> {

  layer: ol.layer.Tile;

  options: any = {
    zIndex: undefined,
    opacity: undefined,
    preload: undefined,
    source: new ol.source.OSM(),
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
  }

  render() {
    return null;
  }

  componentDidMount () {
    this.layer = new ol.layer.Tile(Object.assign(this.options, this.props));
    this.context.map.addLayer(this.layer)
  }

  componentWillUnmount () {
    this.context.map.removeLayer(this.layer)
  }
}

Tile['contextTypes'] = {
  map: React.PropTypes.instanceOf(ol.Map)
};
