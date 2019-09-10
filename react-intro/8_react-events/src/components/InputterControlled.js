import React, { Component } from 'react'

export default class Inputter extends Component {

  update = (event) => {
    debugger
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        Controller input <input type="text" onChange={ this.update } value={ this.props.value}/>
      </div>
    )
  }
}
