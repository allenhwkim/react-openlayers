import * as React from 'react';
import * as ol from 'openlayers';

import './popup.css';

export class Popup extends React.Component<any, any> {
  containerEl: HTMLElement;
  contentEl: HTMLElement;

  render() {
    return (
      <div id="popup" 
        className="ol-popup" 
        ref={el => this.containerEl = el}>
        <a href="#" id="popup-closer"
         onClick={this.hide}
         className="ol-popup-closer"></a>
        <div id="popup-content" ref={el => this.contentEl = el}></div>
      </div>
    );
  }

  setContents(html) {
    this.contentEl.innerHTML = html;
  }

  show(feature) {
    this.containerEl.style.bottom = feature ? '52px' : '12px';
    this.containerEl.style.display = 'block';
  }

  hide() {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    this.containerEl.style.display = 'none';
  }
}