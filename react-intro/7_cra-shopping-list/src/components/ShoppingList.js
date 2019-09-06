import React from "react";
import ShoppingListItem from './ShoppingListItem';

/* Shopping list component, which renders bunch of ShoppingListItem components inside a HTML ul element based on the data received through items prop */
const ShoppingList = props => {
  return <ul>
    {
      props.items.map(i => <ShoppingListItem {...i} key={ i.id }/>)
    }
  </ul>
}

export default ShoppingList;