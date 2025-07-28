import { Map as OlMap } from 'ol';
import Control, { Options } from 'ol/control/Control';
import LayerGroup from 'ol/layer/Group';
import { useEffect } from 'react';
import { useMap } from '../Map';
import { layersIcon } from './icons';
import './LayersControl.css';
import BaseLayer from 'ol/layer/Base';

class LayersControl extends Control {
  constructor(options: Options = {}) {
    const element = document.createElement('div');
    const { target } = options;
    super({ element, target });

    element.className = 'layers-control ol-unselectable ol-control';
    element.insertAdjacentHTML(
      'beforeend',
      `
      <button id="toggle-btn" title="Click here to switch layers">
        ${layersIcon}
      </button>
      <div id="layers">
        layers goes here
      </div>
    `,
    );

    element
      .querySelector('.layers-control #toggle-btn')
      ?.addEventListener('click', this.onToggleBtnClick.bind(this));
  }

  onToggleBtnClick(event: Event) {
    const controlEl = (event.target as HTMLElement).closest(
      '.layers-control',
    ) as HTMLElement;
    controlEl.classList.toggle('active');
    if (!controlEl.classList.contains('active')) {
      return;
    }

    function createUL(layer: OlMap | LayerGroup): HTMLUListElement {
      const ul = document.createElement('ul');

      let layers: BaseLayer[];
      if (layer instanceof OlMap) {
        layers = layer.getLayers().getArray();
      } else {
        layers = layer.getLayers().getArray();
      }

      layers.forEach((lyr: BaseLayer) => {
        const li = document.createElement('li');
        const labelEl = document.createElement('label');
        const chkbox = document.createElement('input');
        chkbox.setAttribute('type', 'checkbox');
        chkbox.checked = lyr.getVisible();
        chkbox.addEventListener('click', (e: MouseEvent) => {
          e.stopPropagation();
          lyr.setVisible((e.target as HTMLInputElement).checked);
        });
        labelEl.appendChild(chkbox);
        const name = lyr.get('name') || lyr.constructor.name;
        labelEl.insertAdjacentText('beforeend', name);
        li.appendChild(labelEl);

        if (lyr instanceof LayerGroup) {
          li.appendChild(createUL(lyr));
        }

        ul.appendChild(li);
      });

      return ul;
    }

    const map = this.getMap();
    if (map) {
      const ul = createUL(map);
      const layersEl = controlEl.querySelector('#layers') as HTMLElement;
      layersEl.innerHTML = '';
      layersEl.appendChild(ul);
    }
  }
}

export default function LayersControlComponent(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new LayersControl(props));
  }, [map]);

  return null;
}