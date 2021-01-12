import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const { repos } = useRepositories();
  
  return <RepositoryListContainer repositories={repos} />
};
export default RepositoryList;