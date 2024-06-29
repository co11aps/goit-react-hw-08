import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const phoneRegExp = /^[0-9]{3}?-[0-9]{3}?-[0-9]{4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(12, "Too Short!")
    .max(12, "Too Long!")
    .required("Required")
    .matches(phoneRegExp, "Please follow pattern xxx-xxx-xxxx"),
});

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneNumberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      name: values.name.trim(),
      number: values.number.trim(),
    };
    dispatch(addContact(newContact));

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css["field-container"]}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              name="name"
              type="text"
              id={nameFieldId}
              placeholder="Name..."
              className={css.field}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css["field-container"]}>
            <label className={css.label} htmlFor={phoneNumberFieldId}>
              Number
            </label>
            <Field
              name="number"
              type="tel"
              placeholder="xxx-xxx-xxxx"
              id={phoneNumberFieldId}
              className={css.field}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
