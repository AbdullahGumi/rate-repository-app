import React from 'react';
import { View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux'

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';	
import { store } from './src/redux/store';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
  	<View>
		<Provider store={store}>  
			<NativeRouter>
			<ApolloProvider client={apolloClient}>
				<AuthStorageContext.Provider value={authStorage}>
				<Main />
				</AuthStorageContext.Provider>
			</ApolloProvider>
			</NativeRouter>
		</Provider>	
  	</View>
  );
}
export default App;