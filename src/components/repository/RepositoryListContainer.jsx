import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositoriesHeader from './RepositoriesHeader';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#dce2ec'
  },
  container: {
     backgroundColor: '#9badcc',
     padding: 25,
     elevation: 100,
   }
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
      ListHeaderComponent={<RepositoriesHeader/>}
      ListHeaderComponentStyle={styles.container}
    />
  );
};

export default RepositoryListContainer;