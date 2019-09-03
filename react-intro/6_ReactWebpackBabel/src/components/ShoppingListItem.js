import React from "react";

/* Shopping list item */
const ShoppingListItem = props => {
  return <li className="item flex">
    <div className="flex itemQtyUnit">
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value}
    </div>
  </li>
}

export default ShoppingListItem;