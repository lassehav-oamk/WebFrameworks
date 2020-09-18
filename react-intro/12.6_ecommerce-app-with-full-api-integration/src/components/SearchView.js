import React from 'react';
import styles from './SearchView.module.css';

import SearchResult from './SearchResult';

export default function SearchView(props) {

  return (
    <div>
      <div className={ styles.presentationModeGrid }>
      {
        props.items.map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
