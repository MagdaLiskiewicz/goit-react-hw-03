import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z\s-]+$/, "Name must be a valid!")
    .required("Name is required"),
  number: Yup.string()
    .min(7, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in the format XXX-XXX-XXXX")
    .required("Number is required"),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    addContact({ id: nanoid(), ...values });
    actions.resetForm();
  };
  //   const saveContact = (e) => {
  //     e.preventDefault();
  //     const { name, number } = e.target.elements;
  //     console.log(name.value, number.value);
  //     addContact({ id: nanoid(), name: name.value, number: number.value });
  //     e.target.reset();
  //   };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
