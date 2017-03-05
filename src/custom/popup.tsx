import * as React from 'react';
import * as ol from 'openlayers';

import './popup.css';

export class Popup extends React.Component<any, any> {
  containerEl: HTMLElement;
  contentEl: HTMLElement;

  constructor(props) { 
    console.log(2222222222);
    super(props);
  }

  render() {
    console.log(3333333333);
    return (
      <div className="olPopup" ref={el => this.containerEl = el}>
        <a className="olPopupCloser"
          href="javascript:void(0)"
          onClick={this.hide}></a>{/* why this does not work??? */}
        <div className="olPopupContents" ref={el => this.contentEl = el}></div>
      </div>
    );
  }

  setContents(html) {
    this.contentEl.innerHTML = html;
  }

  show(bottomDistance: string = '12px') {
    this.containerEl.style.bottom = bottomDistance;
    this.containerEl.style.display = 'block';
  }

  hide() {
    this.containerEl.style.display = 'block';
  }
}