import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'
import AdminView from './components/AdminView';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
      adminModeActive: false,
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, author, price) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      author: author,
      price: price
    });

    this.setState({
      items: newItems
    });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    let output =
      <>
        <div>
          Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
      </>


    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false}) }
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }
                  deleteItem={ this.deleteItem }
               />;
    }



    return (
      <>
        { output }
      </>
    )
  }
}

export default App;