import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#dce2ec'
  },
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

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsListContainer = ({ reviews, onEndReach }) => {
  const reviewNodes = reviews
    ? reviews.authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      style={{ marginBottom: 90 }}
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) =>  item.id}
      renderItem = {({ item }) =>    
      <View style={styles.container}>
      <View style={styles.flexContainerA}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}> 
              {item.rating}
          </Text>
        </View>
        <View style={styles.flexContainerB}>
          <View>
            <Text style={styles.user}>{item.repository.fullName}</Text>
          </View>
          <View>
            <Text style={styles.date}>{format(new Date(item.createdAt), 'yyyy/MM/dd')}</Text>
          </View>
          <View>
            <Text>{item.text}</Text>
          </View>          
        </View>
      </View>      
    </View>
    }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}

    />
  );
};

export default UserReviewsListContainer;