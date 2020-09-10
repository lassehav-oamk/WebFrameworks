import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
    }
  }


  render()
  {
    return (
      <SearchView
        items={ this.state.items }

        />
    )
  }
}

export default App;