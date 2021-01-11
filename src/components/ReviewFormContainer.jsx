import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import ReviewForm from './ReviewForm';

const validationSchema = yup.object().shape({
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  rating: yup
    .number().max(100)
    .required('Rating is required'),
  text: yup
    .string()
});

const ReviewFormContainer = ({ initialValues, onSubmit, error }) => {

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} error={error} />}
    </Formik>
  );
};

export default ReviewFormContainer; 