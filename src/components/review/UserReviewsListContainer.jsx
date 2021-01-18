import React from 'react';
import { FlatList, View, Text, StyleSheet, Alert } from 'react-native';
import { format } from 'date-fns';
import { Button, Provider, Colors } from 'react-native-paper';
import { useHistory } from "react-router-native";

import theme from '../../theme';
import useDelete from '../../hooks/useDelete'

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
  },
  buttonsView: {
    flexDirection: 'row', 
    paddingBottom: 10,
    justifyContent: 'space-evenly' 
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsListContainer = ({ reviews, onEndReach, refetch }) => {
  const [ deleteReview ] = useDelete();
  const history = useHistory();

  const onView = (item) => {
    history.push(`/repositories/${item.repository.id}`);
  }

  const onDelete = (item) => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () =>  {},
        style: 'cancel'
      },
      { text: 'DELETE', onPress: () => {
        deleteReview(item.id)
        refetch()
      } }
    ])
  }


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
      <Provider>    
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
        <View style={styles.buttonsView}>
          <Button style={{ backgroundColor: Colors.blueA700}} color={Colors.white} onPress={() => onView(item)}>View repository</Button>      
          <Button style={{ backgroundColor: Colors.redA700}} color={Colors.white} onPress={() => onDelete(item)}>Delete review</Button>
        </View>  
      </View>
    </Provider>
    }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}

    />
  );
};

export default UserReviewsListContainer;