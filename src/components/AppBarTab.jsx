import React from 'react';
import { View, TouchableWithoutFeedback, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: 'row'
	}
})

const AppBarTab = () => (
	<View style={styles.container}>
		<TouchableWithoutFeedback>
			<ScrollView horizontal>
					<Link to='/'>
						<Text color='primary' fontWeight='bold'>Repositories</Text>
					</Link>
					<Text>  </Text>
					<Link to='/signin'>
						<Text color='primary' fontWeight='bold'>Sign In</Text>
					</Link>
			</ScrollView>
		</TouchableWithoutFeedback>
	</View>
);

export default AppBarTab;