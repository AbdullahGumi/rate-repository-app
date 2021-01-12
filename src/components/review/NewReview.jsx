import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewFormContainer from './ReviewFormContainer';

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
};



const NewReview = () => {
	const [submitReview, { error }] = useReview();

	const onSubmit = async (values) => {
        const { repositoryName, ownerName, rating, text } = values;
		try {
		   await submitReview({ repositoryName, ownerName, rating, text });
		} catch (e) {
		  console.log('review error:', e);
		}
	};
	
	return <ReviewFormContainer initialValues={initialValues} onSubmit={onSubmit} error={error} />
};

export default NewReview;