import React from 'react';
import './App.css';
import Button from './components/Button';
import NumberIndicator from './components/NumberIndicator';
import InputterNonControlled from './components/InputterNonControlled';
import TextOutput from './components/TextOutput';
import InputterControlled from './components/InputterControlled'

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      clickCount: 0,
      textValue: "Demo"
    };

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    this.increaseClickCountWBind = this.increaseClickCountWBind.bind(this);
  }

  increaseClickCountArrow = () => {
    this.setState({ clickCount: this.state.clickCount + 1})
  }

  increaseClickCountWBind()
  {
    this.setState({ clickCount: this.state.clickCount + 1})
  }

  increaseClickCountWOBind()
  {
    this.setState({ clickCount: this.state.clickCount + 1})
  }

  updateText = (newText) => {
    this.setState({ textValue: newText })
  }

  render() {
    return (
      <div>
        <h1>Click example</h1>
        <div>
          Example button for arrow function handler <Button onClick={ this.increaseClickCountArrow }/>
        </div>
        <div>
          Example button for constructor bind function <Button onClick={ this.increaseClickCountWBind }/>
        </div>
        <div>
          Example button for arrow on render function <Button onClick={ () => this.increaseClickCountWOBind()}/>
        </div>
        <div style={ {paddingTop: '50px'} }>
          <NumberIndicator value={ this.state.clickCount }  />
        </div>

        <hr />

        <h1>Text input example</h1>
        <InputterNonControlled onChange={ this.updateText }/>
        <InputterControlled value={ this.state.textValue } onChange={ this.updateText }/>
        <TextOutput text={ this.state.textValue }/>
      </div>
    )
  }
}

