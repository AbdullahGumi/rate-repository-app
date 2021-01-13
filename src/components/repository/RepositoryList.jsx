import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import { useSelector } from 'react-redux';

import useRepositories from '../../hooks/useRepositories';


const RepositoryList = () => {
  const orderBy = useSelector(state => state.repositories.sortMode)
  const orderDirection = useSelector(state => state.repositories.orderDirection)
  const state = useSelector(state => state.repositories)
  console.log(state)
  const { repos } = useRepositories(orderBy, orderDirection);
  
  return <RepositoryListContainer repositories={repos} />
};
export default RepositoryList;