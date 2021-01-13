import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import SortRepositories from './SortRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#eee'
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(list) => list.fullName}
      renderItem = {(list) =>  <RepositoryItem list={list}/>}
      ListHeaderComponent={<SortRepositories/>}
      ListHeaderComponentStyle={{ elevation: 100 }}
    />
  );
};

export default RepositoryListContainer;