import React from 'react';
import { View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';	

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
  	<View>
	  	<NativeRouter>
	      <ApolloProvider client={apolloClient}>
	        <AuthStorageContext.Provider value={authStorage}>
		  	<Main />
		  	</AuthStorageContext.Provider>
	      </ApolloProvider>
	  	</NativeRouter>
  	</View>
  );
}
export default App;