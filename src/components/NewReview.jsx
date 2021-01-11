import React from 'react';
import useReview from '../hooks/useReview';
import ReviewFormContainer from './ReviewFormContainer';

const initialValues = {
  repositoryName: 'rails',
  ownerName: 'rails',
  rating: '5',
  text: 'very good repo',
};



const NewReview = () => {
	const [submitReview, { data, error }] = useReview();

	const onSubmit = async (values) => {
        const { repositoryName, ownerName, rating, text } = values;

		try {
		   await submitReview({ repositoryName, ownerName, rating, text });
           console.log('data', data)
		} catch (e) {
		  console.log('review error:', e);
		}
	};
	
	return <ReviewFormContainer initialValues={initialValues} onSubmit={onSubmit} error={error} />
};

export default NewReview;