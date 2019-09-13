import React, { Component } from 'react';
import styles from './TextBox.module.css';

export default class TextBox extends Component {
  render() {
    return (
      <div className={ styles.box }>
        { this.props.value}
      </div>
    )
  }
}
