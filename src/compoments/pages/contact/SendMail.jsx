import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(import.meta.env.VITE_SEND_MAIL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[values.email, values.message, new Date().toLocaleString()]])
      }
      )
      await response.json()
      await toast.success('Form successfully submitted!');
    } catch (error) {
      await toast.error('An error occurred while submitting the form.');
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className='row'>
      <div className='mx-auto col-md-7' >
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
                <button className="btn btn-primary padding-2" type="submit" disabled={isSubmitting}>
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SendMail;
