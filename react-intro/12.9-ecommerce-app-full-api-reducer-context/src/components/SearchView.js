import React, { useContext, useState } from 'react';
import styles from './SearchView.module.css';
import SearchResult from './SearchResult';
import { DispatchContext } from '../Contexts';

export default function SearchView(props) {

  const [productSearchString, setProductSearchString] = useState("");

  const dispatch = useContext(DispatchContext);

  return (
    <div>
      Search <input type="text" onChange={ (event) => setProductSearchString(event.target.value) } value={ productSearchString }/>
      <button onClick={() => dispatch({ type: 'TOGGLE_ADMIN_MODE' }) }>Admin mode</button>
      <div className={ styles.presentationModeGrid }>
      {
        props.items
          .filter((item) => item.name.toLowerCase().includes(productSearchString.toLowerCase()))
          .map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}