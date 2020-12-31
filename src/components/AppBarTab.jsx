import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const AppBarTab = () => (
	<View>
		<TouchableWithoutFeedback>
			<View>
				<Link to='/'>
					<Text color='primary' fontWeight='bold'>Repositories</Text>
				</Link>
				<Link to='/signin'>
					<Text color='primary' fontWeight='bold'>Sign In</Text>
				</Link>
			</View>
		</TouchableWithoutFeedback>
	</View>
);

export default AppBarTab;