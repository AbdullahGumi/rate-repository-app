import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import { useDebouncedCallback  } from 'use-debounce';

import ReviewItem from '../review/ReviewItem';
import RepositoryInfo from './RepositoryInfo';
import useSingleRepository from '../../hooks/useSingleRepository';
import useRepositoryReviews from '../../hooks/useRepositoryReviews';

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
  const { reviews, fetchMore } = useRepositoryReviews({ id, first: 4 });
  const reviewsData = reviews && reviews.map(item => item.node)
  const debounced = useDebouncedCallback(() => {
    fetchMore()
}, 1000);
  return (
    <FlatList
      style={{ marginBottom: 90 }}
      data={reviewsData}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id }
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={debounced.callback()}
      onEndReachedThreshold={0.5}
    />
    );
};


export default SingleRepositoryItem;