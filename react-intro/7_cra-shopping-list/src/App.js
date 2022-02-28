import React, { useState } from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

export default function App(props) {

  const [items, setItems] = useState([
    { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
    { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
    { id: 3, value: 'Bread', qty: 3, unit: 'x' },
    { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
  ]);

  const { applicationDescription, applicationName } = props;
  
  return <div className={ styles.shoppingList }>
    <Title 
      applicationDescription={ applicationDescription }
      applicationName={ applicationName }
    />
    <ShoppingList items={ items } />
  </div>
}