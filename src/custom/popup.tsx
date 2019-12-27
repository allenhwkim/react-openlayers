import * as React from 'react';
import * as ol from 'openlayers';

import './popup.css';

export class Popup extends React.Component<any, any> {
  containerEl: HTMLElement;
  contentEl: HTMLElement;
  contentClose:HTMLElement;

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.contentClose.addEventListener("click",()=>{
      this.containerEl.style.display='none';
    });
  }

  render() {
    return (
      <div className="olPopup" ref={el => this.containerEl = el}>
        <a className="olPopupCloser"
          href="javascript:void(0)"
          ref={el => this.contentClose = el}
        ></a>
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

}