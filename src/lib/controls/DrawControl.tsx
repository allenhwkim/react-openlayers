import * as ol from 'ol';
import Control from 'ol/control/Control';
import { useEffect } from 'react';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Modify from 'ol/interaction/Modify';
import Snap from 'ol/interaction/Snap';
import Draw from 'ol/interaction/Draw';
import GeoJSON from 'ol/format/GeoJSON';
import { listen, unlistenByKey } from 'ol/events';
import { useMap } from '../Map';
import { drawIcon, lineIcon, pointIcon, polygonIcon, circleIcon, moveIcon} from './icons';
import './DrawControl.css';

class DrawControl extends Control {
  vectorSource: VectorSource;
  modify: Modify; // modifying vectorSource
  drawLayer: VectorLayer; // layer to hold vectorSource
  draw: Draw;
  snap: Snap;
  keyboardListener;

  constructor(options={} as any) {
    const {target} = options as any;

    const element = document.createElement('div');
    element.className = 'draw-control ol-unselectable ol-control';
    if (options.style) {
      Object.assign(element.style, options.style);
    }
    const title = 'Press shift for freehand drawing';
    element.insertAdjacentHTML('beforeend', `
      <button id="toggle-btn" 
        title="Clik here to start drawing. Shift+S to save as GeoJson">
        ${drawIcon}
      </button>
      <div id="shape-btns" class="shapes" hidden>
        <button value="Point" title="${title}">${pointIcon}</button>
        <button value="LineString" title="${title}">${lineIcon}</button>
        <button value="Polygon" title="${title}">${polygonIcon}</button>
        <button value="Circle" title="${title}">${circleIcon}</button>
        <button>${moveIcon}</button>
      </div>
    `);

    super({element, target});

    // setup source
    this.vectorSource = new VectorSource();

    // setup Modify
    this.modify = new Modify({source: this.vectorSource});

    // setup VectorLayer
    this.drawLayer = new VectorLayer({
      source: this.vectorSource,
      style: {
        'fill-color': 'rgba(255, 255, 255, 0.2)',
        'stroke-color': '#ffcc33',
        'stroke-width': 2,
        'circle-radius': 7,
        'circle-fill-color': '#ffcc33',
      },
      properties: {
        key: 'drawLayer'
      }
    });

    element.querySelector('#toggle-btn')
      .addEventListener('click', this.onToggleBtnClick.bind(this));
    element.querySelector('#shape-btns')
      .addEventListener('click', this.onShapeBtnsClick.bind(this))
  }
  
  onToggleBtnClick(event) {
    const drawControl = event.target.closest('.draw-control');
    const shapeBtnsEl = drawControl.querySelector('#shape-btns');
    shapeBtnsEl.toggleAttribute('hidden');

    if (shapeBtnsEl.hasAttribute('hidden')) {
      this.getMap().removeInteraction(this.draw);
      this.getMap().removeInteraction(this.snap);
      this.getMap().removeLayer(this.drawLayer);
      this.getMap().removeInteraction(this.modify);

      unlistenByKey(this.keyboardListener);
    } else {
      this.getMap().addLayer(this.drawLayer);
      this.getMap().addInteraction(this.modify);
      this.keyboardListener = listen(
        this.getMap().getTargetElement(),
        'keydown',
        this.onKeyPressed.bind(this)
      );
    }
  }

  onKeyPressed(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.draw.abortDrawing();
    } else if (event.shiftKey && event.key === 'S') {
      this.downloadGeoJson();
    }
  }

  downloadGeoJson() {
    const features = this.drawLayer.getSource().getFeatures();
    const options = {
      dataProjection: 'EPSG:4326', // Desired projection for the output
      featureProjection: 'EPSG:3857' // Projection of the features in the source
    };
    const geoJsonObject = new GeoJSON().writeFeaturesObject(features, options);
    const geoJsonStr = JSON.stringify(geoJsonObject);

    const a = document.createElement('a');
    const file = new Blob([geoJsonStr], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = 'react-openlayer-geojson.json';
    a.click();
  }

  onShapeBtnsClick(event) {
    const btnEl = event.target.closest('button');
    const type = btnEl.value;

    // Activte only the clicked button
    const containerEl = event.target.closest('#shape-btns');
    Array.from(containerEl.children).forEach((el:any) => el.classList.remove('active'));
    btnEl.classList.add('active');

    // Remove the prev. interaction
    this.getMap().removeInteraction(this.draw);
    this.getMap().removeInteraction(this.snap);

    if (type) { // Add new interaction
      this.draw = new Draw({source: this.vectorSource, type});
      this.snap = new Snap({source: this.vectorSource});
      this.getMap().addInteraction(this.draw);
      this.getMap().addInteraction(this.snap);
    }
  }
}

export default function(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new DrawControl(props));
  }, [map]);

  return null;
};