import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import ReviewItem from './ReviewItem';
import RepositoryInfo from './RepositoryInfo';
import useSingleRepository from '../hooks/useSingleRepository';
import useRepositoryReviews from '../hooks/useRepositoryReviews';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#eee'
  },
})

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryItem = () => {
  const { id } = useParams();
  const { repository } = useSingleRepository({ id });
  const { reviews } = useRepositoryReviews({ id });
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id }
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
    );
};


export default SingleRepositoryItem;