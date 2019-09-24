import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      dogs: [],
      networkError: false
    };
  }

  componentDidMount = () =>
  {    
    axios.get('http://localhost:4000/dogs').then(result => {
      this.setState({ dogs: result.data.dogs });
    })
    .catch(error => {
      console.error(error);
      this.setState({ networkError: true })
    })
  }

  render() {
    return (      
      <div>
        <div>
          <h1>Who let the dogs out?</h1>
        </div>
        <div>
          { 
            this.state.dogs.map(d => <div key={d.id} style={{ margin: "20px" }}>
              <div>Hau hau, says { d.name } </div>
              <div>
                <img src={ d.image} />
              </div>
            </div>
          )}
        </div>
        { this.state.networkError == true ? (<div><div>Network error</div><div>Unable to get the dogs - do you have the server running?</div></div>) : null }
      </div>
    )
  }
}
