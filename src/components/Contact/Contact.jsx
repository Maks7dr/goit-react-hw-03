import css from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Contact;
