import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import { useSelector } from 'react-redux';

import useRepositories from '../../hooks/useRepositories';


const RepositoryList = () => {
  const orderBy = useSelector(state => state.repositories.sortMode)
  const orderDirection = useSelector(state => state.repositories.orderDirection)
  const searchKeyword = useSelector(state => state.repositories.searchKeyword)
  const first = 8;
  const { repos, fetchMore } = useRepositories(orderBy, orderDirection, searchKeyword, first);
  
  const onEndReach = () => {
    fetchMore()
  };


  return <RepositoryListContainer repositories={repos} onEndReach={onEndReach}/>
};
export default RepositoryList;