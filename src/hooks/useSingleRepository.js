import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIY } from '../graphql/queries';

const useSingleRepository = ({ id }) => {
    const [repository, setRepository] = useState([]);
    const { data, called } = useQuery(GET_REPOSITORIY, {
        fetchPolicy: 'cache-and-network',
        variables: { id }
    });

    useEffect(() => {
        if (called) {
            const repos = data ? data.repository : null;
            setRepository(repos)
        }
    }, [data])

    return { repository }
}

export default useSingleRepository;