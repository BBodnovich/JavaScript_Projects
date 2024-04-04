import React, { Component } from 'react';
import CardList from '../components/CardList.js'
import { contacts } from '../contacts.js'
import SearchBox from '../components/SearchBox.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ contacts: contacts });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { contacts, searchfield } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !contacts.length ? <h1>Loading</h1> : 
    (
      <div>
        <div className="mainheading-container">
          <h1 className="mainheading">Futurama Friends Directory</h1>
        </div>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList contacts={filteredContacts}/>
      </div>
      );
  }
}


export default App;
