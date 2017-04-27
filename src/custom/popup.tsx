import * as React from 'react';
import * as ol from 'openlayers';

import './popup.css';

export class Popup extends React.Component<any, any> {
  containerEl: HTMLElement;
  contentEl: HTMLElement;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="olPopup" ref={el => this.containerEl = el}>
        <button className="olPopupCloser"
          onClick={() => alert()}></button>{/* why this does not work??? */}
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
    alert();
    this.containerEl.style.display = 'none';
  }
}
