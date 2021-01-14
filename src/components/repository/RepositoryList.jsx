import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import { useSelector } from 'react-redux';

import useRepositories from '../../hooks/useRepositories';


const RepositoryList = () => {
  const orderBy = useSelector(state => state.repositories.sortMode)
  const orderDirection = useSelector(state => state.repositories.orderDirection)
  const searchKeyword = useSelector(state => state.repositories.searchKeyword)
  const { repos } = useRepositories(orderBy, orderDirection, searchKeyword);
  
  return <RepositoryListContainer repositories={repos} />
};
export default RepositoryList;