import React from 'react';
import useSignIn from '../hooks/useSignIn';
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
		  const { data } = await signIn({ username, password });
		  console.log(data.authorize.accessToken)
		} catch (e) {
		  console.log('error:', e);
		}
	};
	
	return <SignInContainer initialValues={initialValues} onSubmit={onSubmit} />
};

export default SignIn;