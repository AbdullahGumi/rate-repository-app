import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const { data } = useQuery(GET_REPOSITORIES, {
  fetchPolicy: 'cache-and-network',
  variables: { orderBy, orderDirection, searchKeyword }
});
  const [repos, setRepositories] = useState();

  useEffect(() => {
  data && setRepositories(data.repositories)
  }, [data]);

  return { repos };
};

export default useRepositories;