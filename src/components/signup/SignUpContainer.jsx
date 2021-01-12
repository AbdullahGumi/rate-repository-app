import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'username is too short')
    .max(30, 'username is too long')
    .required('Username is required with a length between 1 and 30'),
  password: yup
    .string()
    .min(5, 'Password length must be more than 4')
    .max(50, 'Password length must be less than 51')
    .required('Password is required with a length between 5 and 50'),
    passwordConfirmation: yup
    .string()
    .oneOf([yup.ref ('password'), null], "Passwords must match")
    .required('Password confirmation is required'),    
});

const SignUpContainer = ({ initialValues, onSubmit, error }) => {

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} error={error}/>}
    </Formik>
  );
};

export default SignUpContainer; 