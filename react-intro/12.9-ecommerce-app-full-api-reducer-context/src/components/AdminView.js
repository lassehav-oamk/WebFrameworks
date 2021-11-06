import React, { useState, useContext } from 'react'
import { DispatchContext } from '../Contexts';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminView(props) {

  const [newItemName, setNewItemName] = useState("");
  const [newItemAuthor, setNewItemAuthor] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [updatingAPI, setUpdatingAPI] = useState(false);

  const dispatch = useContext(DispatchContext);

  const addNewItem = async () => {
    try {
      setUpdatingAPI(true);
      await axios.post('http://localhost:4000/products', {
        name: newItemName,
        author: newItemAuthor,
        price: newItemPrice
      })
      console.log(`Added ${newItemName} by ${newItemAuthor}, \$${newItemPrice}`)

      const newItems = await axios.get('http://localhost:4000/products');
      dispatch({ type: 'UPDATE_ITEMS', payload: newItems.data })
      setUpdatingAPI(false);
    } catch (error) {
      setUpdatingAPI(false);
      alert('API communication problem');
    }
  }

  const onDeleteItemClick = async (item) => {
    console.log("clicked delete for item id " + item.id);
    try {
      const response = await axios.delete('http://localhost:4000/products/' + item.id);
      dispatch({ type: 'DELETE_ITEM', payload: item.id})
    } catch (error) {
      alert('API communication problem')
    }
  }

  return (
    <div>
      <div>
          <h1>Add new item</h1>
          <div>
            Name <input type="text" onChange={ (event) => setNewItemName(event.target.value) } />
          </div>
          <div>
            Author <input type="text" onChange={ (event) => setNewItemAuthor(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) } />
          </div>
          <button onClick={ addNewItem }>Add Item</button>

        </div>
        <button onClick={ () => dispatch({ type: 'TOGGLE_ADMIN_MODE' })}>Disable Admin Mode</button>

        <h1>List of items</h1>
        <LoadingSpinner isLoading={updatingAPI}>
          {
            props.items.map((item, index) =>
              <div key={index}>
                <button onClick={() => onDeleteItemClick(item) }>X</button> {item.name}, {item.author}, {item.price}
              </div>)
          }
        </LoadingSpinner>
    </div>
  )
}