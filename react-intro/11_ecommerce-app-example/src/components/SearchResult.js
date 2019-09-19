import React from 'react';
import styles from './SearchResult.module.css';
import { Link } from "react-router-dom";

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
      <Link to={ `/product/${props.id}` }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>${ props.price }</div>
        </div>
      </Link>
    </div>
  )
}
