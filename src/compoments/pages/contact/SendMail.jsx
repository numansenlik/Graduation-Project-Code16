import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SendMail = () => {
  const initialValues = {
    email: '',
    message: ''
  };

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting , resetForm }) => {
    console.log('Submitted Values:', values);
    try {
      const response = await fetch("https://v1.nocodeapi.com/numan16/google_sheets/iSVAOxhVAQIJrubi?tabId=Sayfa1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[values.email, values.message, new Date().toLocaleString()]])
      }
      )
      await response.json()

    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className='row'>
      <div className='mx-auto col-7' >
        <h2 className='text-center'>Get in Touch With Us</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
          {({ isSubmitting }) => (
            <Form className="p-2">
              <div className="mb-3">
                <label htmlFor="email">Email:</label>
                <Field className="form-control" type="email" name="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message:</label>
                <Field className="form-control" as="textarea" name="message" />
                <ErrorMessage name="message" component="div" className="text-danger" />
              </div>
              <div>
                <button className="btn btn-primary p-2" type="submit" disabled={isSubmitting}>
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SendMail;
