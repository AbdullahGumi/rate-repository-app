import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './repository/RepositoryList';
import SingleRepositoryItem from './repository/SingleRepositoryItem';
import AppBar from './app-bar/AppBar';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import NewReview from './review/NewReview';
import UserReviewsList from './review/UserReviewsList';

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
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/createReview" exact>
          <NewReview />
        </Route>
        <Route path="/userReviews" exact>
          <UserReviewsList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;