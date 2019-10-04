import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import TextBox from './components/TextBox';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      words: ['efficient', 'enchanting', 'noxious', 'humour', 'bike', 'auspicious', 'aggressive', 'whip', 'purple'],
      textFilter: null
    };
  }

  inputChange = (event) => {
    this.setState({ textFilter: event.target.value });
  }

  render() {

    const renderedWords = ((this.state.textFilter != null) && (this.state.textFilter.length > 0)) ? 
      this.state.words.filter( w => w.includes(this.state.textFilter))
      : this.state.words;
      
    
    let conditionalExample;
    const something = false;
    if(something == true)
    {
      conditionalExample = <TextBox value="First" />
    }
    else
    {
      conditionalExample = <TextBox value="Second" />
    }

    return (
      <Container>
        <div>
          Great filterin application demonstrates how to filter items and how to use bootstrap in react application
        </div>
        <div>
          <Form.Control type="text" placeholder="Write thy wording" onChange={ this.inputChange }/>
        </div>
        {          
          <div style={ { display: "flex", flexWrap: "wrap" }}>
            { renderedWords.map(w => <TextBox value={w} />)}
          </div>        
        }
        <hr />

        { conditionalExample }
                
      </Container>
    )
  }
}
