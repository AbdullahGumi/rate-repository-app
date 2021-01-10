import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
  },
  rating: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    justifyContent: 'center'
  },
  ratingText: {
    alignSelf: 'center',
    color: theme.colors.primary,
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexContainerB: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 0.8,
  },
  user: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  date: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  }
});



const ReviewItem = ({ review }) => {
    return (
      <View style={styles.container}>
        <View style={styles.flexContainerA}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}> 
                {review.rating}
            </Text>
          </View>
          <View style={styles.flexContainerB}>
            <View>
              <Text style={styles.user}>{review.user.username}</Text>
            </View>
            <View>
              <Text style={styles.date}>{format(new Date(review.createdAt), 'yyyy/MM/dd')}</Text>
            </View>
            <View>
              <Text>{review.text}</Text>
            </View>          
          </View>
        </View>      
      </View>
      );
};

export default ReviewItem;