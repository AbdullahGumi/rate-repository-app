import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './ RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#eee'
  }
});


const ItemSeparator = () => <View style={styles.separator} />;



const RepositoryList = () => {
  const { repos } = useRepositories();
  
  const repositoryNodes = repos
    ? repos.edges.map(edge => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(list) => list.fullName}
      renderItem = {(list) =>  <RepositoryItem list={list}/>}
    />
  );
};

export default RepositoryList;