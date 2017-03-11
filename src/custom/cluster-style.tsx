import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'openlayers';

export class ClusterStyle {

  maxFeatureCount: number;
  currentResolution: any;
  source: ol.source.Vector;

  constructor(vectorSource: ol.source.Vector) {
    this.source = vectorSource;
  }

  vectorStyleFunction = (feature, resolution) => {
    if (resolution != this.currentResolution) {
      this.calculateClusterInfo(resolution);
      this.currentResolution = resolution;
    }
    var style;
    var size = feature.get('features').length;
    if (size > 1) {
      style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: feature.get('radius'),
          fill: new ol.style.Fill({
            color: [255, 153, 0, Math.min(0.8, 0.4 + (size / this.maxFeatureCount))]
          })
        }),
        text: new ol.style.Text({
          text: size.toString(),
          fill: new ol.style.Fill({ color: '#fff' }),
          stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.6)', width: 3 })
        })
      });
    } else {
      var originalFeature = feature.get('features')[0];
      style = this.createClusterStyle(originalFeature);
    }
    return style;
  };

  selectStyleFunction = (feature) => {
    var invisibleFill = new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.01)' });
    var styles = [new ol.style.Style({
      image: new ol.style.Circle({
        radius: feature.get('radius'),
        fill: invisibleFill
      })
    })];
    var originalFeatures = feature.get('features');
    var originalFeature;
    for (var i = originalFeatures.length - 1; i >= 0; --i) {
      originalFeature = originalFeatures[i];
      styles.push(this.createClusterStyle(originalFeature));
    }
    return styles;
  };

  private calculateClusterInfo(resolution) {
    this.maxFeatureCount = 0;
    var features = this.source.getFeatures();
    var feature, radius;
    for (var i = features.length - 1; i >= 0; --i) {
      feature = features[i];
      var originalFeatures = feature.get('features');
      var extent = ol.extent.createEmpty();
      var j, jj;
      for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
        ol.extent.extend(extent, originalFeatures[j].getGeometry().getExtent());
      }
      this.maxFeatureCount = Math.max(this.maxFeatureCount, jj);
      radius = 0.25 * (ol.extent.getWidth(extent) + ol.extent.getHeight(extent)) /
          resolution;
      feature.set('radius', radius);
    }
  }

  private createClusterStyle(feature) {
    var clusterFill = new ol.style.Fill({ color: 'rgba(255, 153, 0, 0.8)' });
    var clusterStroke = new ol.style.Stroke({ color: 'rgba(255, 204, 0, 0.2)', width: 1 });
    // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    // standards-violating <magnitude> tag in each Placemark.  We extract it
    // from the Placemark's name instead.
    var name = feature.get('name');
    var magnitude = parseFloat(name.substr(2));
    var radius = 5 + 20 * (magnitude - 5);

    return new ol.style.Style({
      geometry: feature.getGeometry(),
      image: new ol.style.RegularShape({
        radius1: radius,
        radius2: 3,
        points: 5,
        angle: Math.PI,
        fill: clusterFill,
        stroke: clusterStroke
      })
    });
  }

}