import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';

const initialValues = {
  username: '',
  password: '',
};



const SignIn = () => {
	const [signIn] = useSignIn();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
		  await signIn({ username, password });
		} catch (e) {
		  console.log('error:', e);
		}
	};
	
	return <SignInContainer initialValues={initialValues} onSubmit={onSubmit} />
};

export default SignIn;