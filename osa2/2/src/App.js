import React from 'react';
import Person from './components/Person'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber:'',
      filter:''
    }
  }

  addPerson = (event) => {
    event.preventDefault()    
    if (!this.state.persons.map(person => person.name).includes(this.state.newName)){      
      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      } 
      personService
      .create(personObject)
      .then(newPerson => {
        this.setState({
          persons: this.state.persons.concat(personObject),
          newName: '',
          newNumber: ''
        })
      })
    }    
  }

  removePerson = (id) => {
    return () => {
      if (window.confirm('Haluatko varmasti poistaa henkilön?')) {
        personService
        .remove(id)
        .then(newPerson => {
          this.setState({
            newName: '',
            newNumber: ''
          })
        })
      }
    }
  }

  componentWillMount() {
    console.log('will mount')
    personService
      .getAll()
      .then(persons => {
        console.log('promise fulfilled')
        this.setState({ persons })
      })
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({newNumber: event.target.value})
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({filter: event.target.value})
  }

  render() {
    const personsToShow =
    !this.state.filter ?
      this.state.persons :
      this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          rajaa näytettäviä: <input value={this.state.filter} onChange={this.handleFilterChange}/>
        </div>
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>       
        <h2>Numerot</h2>
        <ul>
          {personsToShow.map(person => <Person key={person.name} person={person} remove={this.removePerson(person.id)} />)}
        </ul>
      </div>
    )
  }
}

export default App