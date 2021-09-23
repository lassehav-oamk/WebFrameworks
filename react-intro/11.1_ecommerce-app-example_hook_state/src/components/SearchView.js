import React from 'react';
import SearchResult from './SearchResult';
import { Link } from "react-router-dom";
import styles from './SearchView.module.css';

export default function SearchView(props) {

  function updateSearchFilter (event)
  {
    props.onSearchFilterUpdate(event.target.value)
  }

  let presentationClass;
  if(props.presentationMode === "list")
  {
    presentationClass = styles.presentationModeList;
  }
  else
  {
    presentationClass = styles.presentationModeGrid;
  }

  return (
    <div>
      <div>
        <input type="text" onChange={ updateSearchFilter }/>
      </div>

      <div>
        <button onClick={ props.toggleResultPresentationMode }>List mode</button>
      </div>

      <div>
        { props.userInfo == null ? (
          <Link to="/register">
            <button>Register</button>
          </Link>
        ) : (
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        ) }

      </div>

      <div className={ presentationClass }>
      {
        props.items
          .filter(item => item.name.includes(props.searchFilter))
          .map(item => <SearchResult key={item.id} {...item} />
          )
      }
      </div>
    </div>
  )
}
