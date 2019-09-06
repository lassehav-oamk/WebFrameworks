import React, { Component } from 'react';
import styles from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <div className={ styles.button } onClick={this.props.onClick}>
        { this.props.text }
      </div>
    )
  }
}

Button.defaultProps = {
  text: 'Button',
  onClick: () => { console.warn("onClick not implemented"); }
};
