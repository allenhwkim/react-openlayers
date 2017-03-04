import * as React from 'react';

// I wish I can name it as 'layers', not 'Layers'
export class Layers extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>{this.props.children}</div>);
  }
}
