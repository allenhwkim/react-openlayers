import * as ol from 'ol';
import Control from 'ol/control/Control';
import { useEffect } from 'react';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Modify from 'ol/interaction/Modify';
import Snap from 'ol/interaction/Snap';
import Draw from 'ol/interaction/Draw';
import { listen, unlistenByKey } from 'ol/events';
import { useMap } from '../Map';
import { drawIcon, lineIcon, pointIcon, polygonIcon, circleIcon} from './icons';
import './style.css';
import GeoJSON from 'ol/format/GeoJSON';

class DrawControlClass extends Control {
  vectorSource: VectorSource;
  modify: Modify; // modifying vectorSource
  drawLayer: VectorLayer; // layer to hold vectorSource
  draw: Draw;
  snap: Snap;
  keyboardListener;

  constructor(options={}) {
    const {target} = options as any;

    const element = document.createElement('div');
    element.className = 'draw-control ol-unselectable ol-control';
    const title = 'Press shift for freehand drawing';
    element.insertAdjacentHTML('beforeend', `
      <button id="draw-btn">${drawIcon}</button>
      <div id="draw-btns" class="shapes" title="Shift+S to save as GeoJson" hidden>
        <button id="point-btn">${pointIcon}</button>
        <button id="line-btn" title="${title}">${lineIcon}</button>
        <button id="polygon-btn" title="${title}">${polygonIcon}</button>
        <button id="circle-btn" title="${title}">${circleIcon}</button>
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

    element.querySelector('#draw-btn')
      .addEventListener('click', this.onDrawBtnClick.bind(this));
    element.querySelector('#point-btn')
      .addEventListener('click', e => this.onShapeBtnClick(e, 'Point'));
    element.querySelector('#line-btn')
      .addEventListener('click', e => this.onShapeBtnClick(e, 'LineString'));
    element.querySelector('#circle-btn')
      .addEventListener('click', e => this.onShapeBtnClick(e, 'Circle'));
    element.querySelector('#polygon-btn')
      .addEventListener('click', e => this.onShapeBtnClick(e, 'Polygon'));

  }
  
  onDrawBtnClick(event) {
    const drawControl = event.target.closest('.draw-control');
    const drawBtnsEl = drawControl.querySelector('#draw-btns');
    drawBtnsEl.toggleAttribute('hidden');

    if (drawBtnsEl.hasAttribute('hidden')) {
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
    const format = new GeoJSON();
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

  onShapeBtnClick(event, type) {
    const btnContainerEl = event.target.closest('#draw-btns');
    const btnEl = event.target.closest('button');
    Array.from(btnContainerEl.children).forEach((el:any) => el.classList.remove('active'));
    btnEl.classList.add('active');

    this.getMap().removeInteraction(this.draw);
    this.getMap().removeInteraction(this.snap);

    this.draw = new Draw({source: this.vectorSource, type});
    this.snap = new Snap({source: this.vectorSource});
    this.getMap().addInteraction(this.draw);
    this.getMap().addInteraction(this.snap);
  }
}

export function DrawControl(props) {
  const map: ol.Map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new DrawControlClass());
  }, [map]);

  return null;
};