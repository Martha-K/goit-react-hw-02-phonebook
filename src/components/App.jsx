import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = e => {
    console.log('e.target', e.target.name);
    this.setState({
      contacts: this.state.contacts.filter(el => el.name !== e.target.name),
    });
  };

  formSubmitHandle = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    for (const el of this.state.contacts) {
      if (el.name.toLowerCase() === contact.name.toLowerCase()) {
        return alert(`${el.name} is already in contacts.`);
      }
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredElement = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.filteredElement();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandle} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList onClick={this.deleteContact} contacts={filterContacts} />
      </div>
    );
  }
}
