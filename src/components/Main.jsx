import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepositoryItem from './SingleRepositoryItem';
import AppBar from './AppBar';
import SignIn from './SignIn';
import NewReview from './NewReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path="/repositories/:id" exact>
          <SingleRepositoryItem />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/createReview" exact>
          <NewReview />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;