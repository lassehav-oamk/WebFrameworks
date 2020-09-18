import React from 'react';
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      productSearchString: "",
      adminModeActive: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        this.setState({ items: response.data })
      });
  }

  onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, author, price) => {
    axios.post('http://localhost:4000/products',
               {
                name,
                author,
                price
               })
      .then(response => {
        this.setState({ items: response.data });
      })
  }

  deleteItem = itemId => {
    axios.delete('http://localhost:4000/products/' + itemId)
      .then(response => {
        console.log(response);
        this.setState({items: this.state.items.filter(item => item.id !== itemId)})
      })
      .catch(err => console.log(err));
  }

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