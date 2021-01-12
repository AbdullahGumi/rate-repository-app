import React from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import FormikTextInput from '../custom-text-and-text-input/FormikTextInput';
import theme from '../../theme';

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
  signupBtn: {
    paddingTop: 10,
    height:45,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  errorText: {
    color: 'red'
  }
})

const SignUpForm = ({ onSubmit, error }) => {
 const message = error && error.graphQLErrors.map(({ message }) => message);
 return (
    <View style={styles.inputContainer}>
      <Text style={styles.errorText}>{message}</Text>
      <FormikTextInput
        style={styles.input}
        name="username"
        placeholder="username"
      />
      <FormikTextInput
        style={styles.input}
        name="password"
        placeholder="password"
        secureTextEntry
      />
      <FormikTextInput
        style={styles.input}
        name="passwordConfirmation"
        placeholder="confirm password"
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
      <View style={styles.signupBtn}>
          <Text style={{ color: 'white', alignSelf: 'center'}}>Sign Up</Text>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUpForm;