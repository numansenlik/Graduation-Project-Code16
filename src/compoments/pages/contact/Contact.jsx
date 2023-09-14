import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Comments from '../contact/Comments';
import handleSubmit from '../../../customHooks/contacts/handleSubmit';
import SendMail from './SendMail';
import { ContactContext } from '../../../context/ContactContext';


function Contact() {
  const { data, isActive, setData } = useContext(ContactContext)
  async function putData(values, { resetForm }) {
    const newData = await handleSubmit(values, data);
    setData(newData);
    resetForm();
  }

  useEffect(() => {
    setData(data);
  }, [isActive]);

  const validateForm = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.comment) {
      errors.comment = 'Comment is required';
    }

    return errors;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          {isActive ? <Comments data={data} /> : <h1>Loading...</h1>}
        </div>
        <div className="col-md-5">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              title: '',
              comment: '',
            }}
            onSubmit={putData}
            validate={validateForm}
          >
            {() => (
              <Form className="row g-3" noValidate>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    aria-label="First name"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-danger" />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <Field
                    as="textarea"
                    className="form-control"
                    id="title"
                    name="title"
                    rows="1"
                  />
                  <ErrorMessage name="title" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Comment
                  </label>
                  <Field
                    as="textarea"
                    className="form-control"
                    id="comment"
                    name="comment"
                    rows="3"
                  />
                  <ErrorMessage name="comment" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary p-2">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <SendMail />
    </div>
  );
}

export default Contact;
