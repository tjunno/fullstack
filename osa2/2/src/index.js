import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({ newPerson: event.target.value })
  }

  render() {
    return (
      <div>
        debug: {this.state.newName}
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName}/>
          </div>
            <button type="submit">lisää</button>
        </form>       
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(note => <Note key={person.name} person={person} />)}
        </ul>
      </div>
    )
  }
}

export default App