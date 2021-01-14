import React, { useState } from 'react';
import { Provider, Searchbar as SearchbarComponent } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback  } from 'use-debounce';

import { setSearchQuery } from '../../redux/reducers/repositoriesReducer';


const SearchBar = () => {
    const dispatch = useDispatch();  
    const [value, setValue] = useState('');
    
    const debounced = useDebouncedCallback((query) => {
        dispatch(setSearchQuery(query))
    }, 1000);

  return (
    <Provider>
        <SearchbarComponent 
        placeholder="Search"
        onChangeText={(query) => {
            debounced.callback(query)
            setValue(query)
        }}
        value={value}
        />
    </Provider>
  );
};

export default SearchBar;