import css from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button> Delete</button>
    </>
  );
};
export default Contact;
