import React from 'react';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};



const SignUp = () => {
	const [signUp, { error }] = useSignUp();
	const [signIn] = useSignIn();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
		  await signUp({ username, password});
		  await signIn({ username, password });
		} catch (e) {
		  console.log('error:', e);
		}
	};
	
	return <SignUpContainer initialValues={initialValues} onSubmit={onSubmit} error={error}/>
};

export default SignUp;