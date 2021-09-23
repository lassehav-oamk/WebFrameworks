import React, { useState, useEffect } from 'react';
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import axios from 'axios';

export default function App() {

  const [items, setItems] = useState([]);
  const [productSearchString, setProductSearchString] = useState("");
  const [adminModeActive, setAdminModeActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessingAdminOperation, setIsProcessingAdminOperation] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        console.log('loaded new items from API');
        setItems(response.data)
        setIsLoading(false);
      });
  }, [adminModeActive]);

  const onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    setProductSearchString(event.target.value);
  }

  const addNewItem = async (name, author, price) => {
    setIsProcessingAdminOperation(true);
    await axios.post('http://localhost:4000/products', {
      name: name,
      author: author,
      price: price
    })

    const newItems = await axios.get('http://localhost:4000/products');
    setItems(newItems.data);
    setIsProcessingAdminOperation(false);
  }

  const deleteItem = async itemId => {
    setIsProcessingAdminOperation(true);
    const result = await axios.delete('http://localhost:4000/products/' + itemId);
    setItems(items.filter(item => item.id !== itemId))
    setIsProcessingAdminOperation(false);
  };

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
                isProcessingAdminOperation={ isProcessingAdminOperation }
              />;
  }

  return (
    <>
      { isLoading ? (<div className="spinner-border" role="status"></div>) : output }
    </>
  )
}
