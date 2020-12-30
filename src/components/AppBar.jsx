import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.background.backgroundColor,
    paddingLeft: 10,
    height: 100,
    justifyContent: 'center'
  },
});

const AppBar = () => (
	<View style={styles.container}><AppBarTab/></View>
);

export default AppBar;