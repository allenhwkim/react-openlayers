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
        li.innerHTML = layer.get('name') || layer.constructor.name;
        layer.getVisible() && li.classList.add('visible');
        li.addEventListener('click', (event) => {
          event.stopPropagation();
          li.classList.toggle('visible');
          layer.setVisible(li.classList.contains('visible'));
        });
        
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