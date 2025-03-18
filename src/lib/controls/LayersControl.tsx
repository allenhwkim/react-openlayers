import { Map as OlMap } from 'ol';
import Control from 'ol/control/Control';
import LayerGroup from 'ol/layer/Group';
import { useEffect } from 'react';
import { useMap } from '../Map';
import { layersIcon } from './icons';
import './LayersControl.css';

class LayersControl extends Control {

  constructor(options={}) {
    const element = document.createElement('div');
    const {target} = options as any;
    super({element, target});
    const map = this.getMap();

    element.className = 'layers-control ol-unselectable ol-control';
    element.insertAdjacentHTML('beforeend', `
      <button id="toggle-btn" title="Clik here to switch layers">
        ${layersIcon}
      </button>
      <div id="layers">
        layers goes here
      </div>
    `);

    element.querySelector('.layers-control #toggle-btn')
      .addEventListener('click', this.onToggleBtnClick.bind(this));
  }
  
  onToggleBtnClick(event) {
    const controlEl = event.target.closest('.layers-control');
    controlEl.classList.toggle('active');
    if (!controlEl.classList.contains('active')) {
      return;
    }

    function createUL(layer) {
      const ul = document.createElement('ul');
      
      layer.getLayers().forEach(layer => {
        const li = document.createElement('li');
        const labelEl = document.createElement('label');
        const chkbox = document.createElement('input');
        chkbox.setAttribute('type', 'checkbox');
        chkbox.checked = layer.getVisible();
        chkbox.addEventListener('click', (e: any) => {
          event.stopPropagation();
          layer.setVisible(e.target.checked);
        });
        labelEl.appendChild(chkbox);
        const name = layer.get('name') || layer.constructor.name;
        labelEl.insertAdjacentText('beforeend', name);
        li.appendChild(labelEl);
        
        if (layer instanceof LayerGroup) {
          li.appendChild(createUL(layer));
        }
        
        ul.appendChild(li);
      });
      
      return ul;
    }
    
    const ul = createUL(this.getMap());
    const layersEl = controlEl.querySelector('#layers');
    layersEl.innerHTML = '';
    layersEl.appendChild(ul);
  }

}

export default function(props) {
  const map: OlMap = useMap();

  useEffect(() => {
    if (!map) return;
    map.addControl(new LayersControl());
  }, [map]);

  return null;
};