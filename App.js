import React from 'react';
import { View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
  return (
  	<View>
	  	<NativeRouter>
	      <ApolloProvider client={apolloClient}>
		  	<Main />
	      </ApolloProvider>
	  	</NativeRouter>
  	</View>
  );
}