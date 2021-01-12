import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'username is too short')
    .required('username is required'),
  password: yup
    .string()
    .min(6, 'Password length must be more than 5')
    .required('Password is required'),
});

const SignInContainer = ({ initialValues, onSubmit }) => {

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer; 