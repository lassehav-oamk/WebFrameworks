import React from "react";
import ReactDOM from "react-dom";

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

/* Shopping list component, which renders bunch of ShoppingListItem components inside a HTML ul element based on the data received through items prop */
const ShoppingList = props => {
  return <ul>
    {
      props.items.map(i => <ShoppingListItem {...i} key={ i.id }/>)
    }
  </ul>
}

/* A component for rendering Title, notice how this is just a function which returns a react element */
const Title = props => {
  return <div>
    <h1 id='title'>{ props.applicationName }</h1>
    <div id='titleSub'>{ props.applicationDescription }</div>
  </div>
}    

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 1, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 1, value: 'Bread', qty: 3, unit: 'x' },
        { id: 1, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className='shoppingList'>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
    </div>
  }
}

/* Render the App component */
ReactDOM.render(
  <App
    applicationName={ "Shopping List" }
    applicationDescription= { "The best shopping list, now built with webpack" }
  />,      
  document.getElementById('application')
);