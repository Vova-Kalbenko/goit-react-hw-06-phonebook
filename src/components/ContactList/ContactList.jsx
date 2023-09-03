import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import  {getFilteredContacts}  from '../../redux/contacts/contacts-selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
 import css from './ContactList.module.css';

const ContactList = () => {
  // const filter = useSelector((state) => state.filter);
  // console.log(filter)
  const visibleContacts = useSelector(getFilteredContacts);
  // console.log(visibleContacts)
  const dispatch = useDispatch();
  // console.log(visibleContacts)

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactsList}>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={handleDeleteContact}
            />
          );
        })
      ) : (
        <p>Not found name</p>
      )}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};


