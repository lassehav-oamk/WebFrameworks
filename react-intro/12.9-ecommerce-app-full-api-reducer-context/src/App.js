import React, { useEffect, useReducer } from 'react';
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import LoadingSpinner from './components/LoadingSpinner';
import axios from 'axios';
import reducer, { initialState } from './Reducer';
import { DispatchContext } from './Contexts'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/products');
        console.log('loaded new items from API');
        dispatch({ type: "UPDATE_ITEMS", payload: response.data });
      } catch (error) {
        alert('Problem loading data from the API. Is the API running?');
      }
    }
    fetchData();
  }, [state.adminModeActive]);

  return (
    <>
      <DispatchContext.Provider value={ dispatch }>
        <LoadingSpinner isLoading={ state.isLoading }>
          { state.adminModeActive ?
            <AdminView items={ state.items } /> : <SearchView items={ state.items } />}
        </LoadingSpinner>
      </DispatchContext.Provider>
    </>
  )
}