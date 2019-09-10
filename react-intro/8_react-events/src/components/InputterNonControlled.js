import React, { Component } from 'react'

export default class Inputter extends Component {

  update = (event) => {
    debugger
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        Non controlled input <input type="text" onChange={ this.update } />
      </div>
    )
  }
}
