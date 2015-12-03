
import React from 'react';

var style = {
  color: "blue"
}

export default class Hello extends React.Component {
  render() {
    return <h1 style = {style}> Hello World</h1>;
  }
}