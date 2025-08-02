import Control, { Options } from 'ol/control/Control';
import { useEffect, CSSProperties } from 'react';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Modify from 'ol/interaction/Modify';
import Snap from 'ol/interaction/Snap';
import Draw from 'ol/interaction/Draw';
import GeoJSON from 'ol/format/GeoJSON';
import { EventsKey, listen, unlistenByKey } from 'ol/events';
import { useMap } from '../Map';
import { drawIcon, lineIcon, pointIcon, polygonIcon, circleIcon, moveIcon} from './icons';
import './DrawControl.css';
import BaseEvent from 'ol/events/Event';

interface DrawControlOptions extends Options {
  style?: CSSProperties;
}

class DrawControl extends Control {
  vectorSource: VectorSource;
  modify: Modify; // modifying vectorSource
  drawLayer: VectorLayer; // layer to hold vectorSource
  draw?: Draw;
  snap?: Snap;
  keyboardListener?: EventsKey;

  constructor(options: DrawControlOptions = {}) {
    const { target } = options;

    const element = document.createElement('div');
    element.className = 'draw-control ol-unselectable ol-control';
    if (options.style) {
      Object.assign(element.style, options.style);
    }
    const title = 'Press shift for freehand drawing';
    element.insertAdjacentHTML('beforeend', `
      <button id="toggle-btn" 
        title="Click here to start drawing. Shift+S to save as GeoJson">
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

    const toggleBtn = element.querySelector('#toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', this.onToggleBtnClick.bind(this));
    }
    const shapeBtns = element.querySelector('#shape-btns');
    if (shapeBtns) {
      shapeBtns.addEventListener('click', this.onShapeBtnsClick.bind(this));
    }
  }
  
  onToggleBtnClick(event: Event) {
    const drawControl = (event.target as HTMLElement).closest('.draw-control');
    if (!drawControl) return;
    const shapeBtnsEl = drawControl.querySelector('#shape-btns');
    if (!shapeBtnsEl) return;
    shapeBtnsEl.toggleAttribute('hidden');

    if (shapeBtnsEl.hasAttribute('hidden')) {
      const map = this.getMap();
      if (map) {
        if (this.draw) map.removeInteraction(this.draw);
        if (this.snap) map.removeInteraction(this.snap);
        map.removeLayer(this.drawLayer);
        map.removeInteraction(this.modify);
      }
      if (this.keyboardListener) {
        unlistenByKey(this.keyboardListener);
      }
    } else {
      const map = this.getMap();
      if (map) {
        map.addLayer(this.drawLayer);
        map.addInteraction(this.modify);
        const targetElement = map.getTargetElement();
        if (targetElement) {
          this.keyboardListener = listen(
            targetElement,
            'keydown',
            this.onKeyPressed
          );
        }
      }
    }
  }

  onKeyPressed(arg0: Event | BaseEvent) {
    if (typeof arg0 === 'object' && 'key' in arg0) {
      const event = arg0 as KeyboardEvent;
      if (event.key === 'Escape') {
        this.draw?.abortDrawing();
      } else if (event.shiftKey && event.key === 'S') {
        this.downloadGeoJson();
      }
    }
  }

  downloadGeoJson() {
    const source = this.drawLayer.getSource();
    if (!source) return;
    const features = source.getFeatures();
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

  onShapeBtnsClick(event: Event) {
    const btnEl = (event.target as HTMLElement).closest('button');
    if (!btnEl) return;
    const type = btnEl.value;

    // Activte only the clicked button
    const containerEl = (event.target as HTMLElement).closest('#shape-btns');
    if (!containerEl) return;
    Array.from(containerEl.children).forEach((el:any) => el.classList.remove('active'));
    btnEl.classList.add('active');

    // Remove the prev. interaction
    const map = this.getMap();
    if (map) {
      if (this.draw) map.removeInteraction(this.draw);
      if (this.snap) map.removeInteraction(this.snap);
    }

    if (type && map) { // Add new interaction
      this.draw = new Draw({source: this.vectorSource, type: type as any});
      this.snap = new Snap({source: this.vectorSource});
      map.addInteraction(this.draw);
      map.addInteraction(this.snap);
    }
  }
}

export default function(props: DrawControlOptions) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new DrawControl(props));
  }, [map]);

  return null;
};