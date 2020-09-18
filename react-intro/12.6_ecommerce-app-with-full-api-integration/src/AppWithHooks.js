import React, { useState, useEffect } from 'react';
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import axios from 'axios';

export default function AppWithHooks() {

  const [items, setItems] = useState([]);
  const [productSearchString, setProductSearchString] = useState("");
  const [adminModeActive, setAdminModeActive] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        setItems(response.data)
      });
  });

  const onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    setProductSearchString(event.target.value);
  }

  const addNewItem = (name, author, price) => {
    let newItems = [...items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      author: author,
      price: price
    });

    setItems(newItems)
  }

  const deleteItem = itemId => setItems(items.filter(item => item.id !== itemId));


  let output =
    <>
      <div>
        Search <input type="text" onChange={ onSearchFieldChange } value={ productSearchString }/>
      </div>
      <SearchView
        items={ items.filter((item) => item.name.includes(productSearchString)) }
        />
      <button onClick={() => setAdminModeActive(!adminModeActive) }>Admin mode</button>
    </>


  if(adminModeActive) {
    output = <AdminView
                disableAdminMode={() => setAdminModeActive(false) }
                addNewItem={ addNewItem }
                items={ items }
                deleteItem={ deleteItem }
              />;
  }

  return (
    <>
      { output }
    </>
  )
}
