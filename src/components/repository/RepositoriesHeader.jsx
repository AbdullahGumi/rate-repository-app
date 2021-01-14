import React from 'react';
import { View } from 'react-native';

import Searchbar from './SearchBar';
import SortRepositories from './SortRepositories';

const RepositoriesHeader = () => {

  return (
    <View>
      <View>
          <Searchbar/>
      </View>
      <View style={{ paddingTop: 20, }}>
          <SortRepositories/>
      </View>
    </View>
  );
};

export default RepositoriesHeader;