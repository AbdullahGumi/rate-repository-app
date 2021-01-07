import React from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    margin: 10,
  },
  input: {
      height:45,
      marginLeft:16,
      padding: 15,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      margin: 10
  },
  siginBtn: {
    paddingTop: 10,
    height:45,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  }
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.inputContainer}>
      <FormikTextInput
        testID='usernameField'
        style={styles.input}
        name="username"
        placeholder="username"
      />
      <FormikTextInput
        testID='passwordField'
        style={styles.input}
        name="password"
        placeholder="password"
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
      <View style={styles.siginBtn}>
          <Text testID='submitButton' style={{ color: 'white', alignSelf: 'center'}}>Sign In</Text>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;