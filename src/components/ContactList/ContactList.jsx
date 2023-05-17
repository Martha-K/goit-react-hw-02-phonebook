import PropTypes from 'prop-types';

import { ContactElement } from '../ContactElement/ContactElement';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ol>
      {contacts.map(el => {
        return <ContactElement onClick={onClick} key={el.id} el={el} />;
      })}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};