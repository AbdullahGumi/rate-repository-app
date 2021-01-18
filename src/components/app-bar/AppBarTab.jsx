import React from 'react';
import { View, TouchableWithoutFeedback, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import useSignOut from '../../hooks/useSignOut';

import Text from '../custom-text-and-text-input/Text';

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: 'row'
	}
})

const AppBarTab = () => {
	const [signOut, data] = useSignOut();

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback>
				<ScrollView horizontal>
						<Link to='/'>
							<Text color='primary' fontWeight='bold'>Repositories</Text>
						</Link>
						<Text>  </Text>
						{data && data.authorizedUser &&
							<Link to='/createReview'>
								<Text color='primary' fontWeight='bold'>Create a review</Text>
							</Link>												
						}						
						<Text>  </Text>
						{data && data.authorizedUser &&
							<Link to='/userReviews'>
								<Text color='primary' fontWeight='bold'>My reviews</Text>
							</Link>												
						}						
						<Text>  </Text>
						{data && !data.authorizedUser ? (
							<View style={{ flexDirection: 'row' }}>
								<View>
									<Link to='/signin'>
										<Text color='primary' fontWeight='bold'>Sign In</Text>
									</Link>
								</View>
								<Text>  </Text>
								<View>
									<Link to='/signup'>
										<Text color='primary' fontWeight='bold'>Sign Up</Text>
									</Link>									
								</View>						
							</View>						
						) : (
							<View>
								<Text onPress={signOut} color='primary' fontWeight='bold'>Sign Out</Text>			
							</View>							
						)

						}
				</ScrollView>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default AppBarTab;