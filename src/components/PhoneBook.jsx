
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './PhoneBook.module.css';
export default function PhoneBook() {

  return (
    <section className={css.sectionWrapper}>
      <h1>Phonebook</h1>
      <Form/>

      <h2>Contacts</h2>
      <div>
        <Filter/>
        <ContactList/>
      </div>
    </section>
  );

}

// || 