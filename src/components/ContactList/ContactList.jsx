import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ conts, onDelete }) => {
  return (
    <ul className={css.list}>
      {conts.map((cont) => (
        <li className={css.item} key={cont.id}>
          <Contact
            name={cont.name}
            number={cont.number}
            onDelete={() => onDelete(cont.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
