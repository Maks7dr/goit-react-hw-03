import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
  const initialValues = {
    username: '',
    telephone: '',
  };

  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="username" id={nameFieldId} />
          <label htmlFor={telFieldId}>Number</label>
          <Field type="tel" name="telephone" id={telFieldId} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
