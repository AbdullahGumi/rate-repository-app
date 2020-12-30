import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';

const AppBarTab = () => (
	<View>
		<TouchableWithoutFeedback>
			<Text color='primary' fontWeight='bold'>Repositories</Text>
		</TouchableWithoutFeedback>
	</View>
);

export default AppBarTab;