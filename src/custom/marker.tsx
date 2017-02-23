/**
 * NOTE: if you rename this file to icon.ts, there will be dupliate definition error
 */
import * as React from 'react';
import * as ol from 'openlayers';

/**
 * Inherits ol.source.Vector to be used as a source of a ol.layer.Vector
 * NOTE: this is just for convenience. Do NOT code too much here.
 */
function Marker(options?: any) {
  options = options || {};
  let customKeys = ['positions', 'position', 'style', 'features'];
  /*
   * set style
   */
  this.style = options.style || 
    new ol.style.Style({
      image: new ol.style.Icon(/** @type {ol.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'https://harrywood.co.uk/maps/examples/leaflet/leaflet/images/marker-icon.png'
      }))
    })

  /*
   * set features
   */
  options.positions = options.positions || [options.position || [0,0]];
  if (!options.features && options.positions) {
    this.features = options.positions.map(pos => {
      return new ol.Feature({geometry: new ol.geom.Point(
          ol.proj.transform(pos, 'EPSG:4326', 'EPSG:3857')
        )});
    });
  }

  //build ol.source.Vector arguments
  let args = Object['assign']({}, options);
  //delete custom keys which are not an option of ol.source.Vector
  customKeys.forEach( key => delete args[key]); 
  args.features = this.features;

  ol.source.Vector.call(this, args);
}
ol.inherits(Marker as any, ol.source.Vector as any);

export {Marker};