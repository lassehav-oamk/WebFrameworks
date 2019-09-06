import React from 'react';
import styles from './NumberIndicator.module.css';

export default function NumberIndicator(props) {
  return (
    <div className={ styles.number }>
      { props.value }
    </div>
  )
}


