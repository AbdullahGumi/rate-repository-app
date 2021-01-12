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
  siginBtn: {
    paddingTop: 10,
    height:45,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  errorText: {
    color: 'red'
  }
})

const ReviewForm = ({ onSubmit, error }) => {
 const message = error && error.graphQLErrors.map(({ message }) => message);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.errorText}>{message}</Text>
      <FormikTextInput
        style={styles.input}
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        style={styles.input}
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.input}
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        style={styles.input}
        name="text"
        multiline
        placeholder="Review"
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
      <View style={styles.siginBtn}>
          <Text style={{ color: 'white', alignSelf: 'center'}}>Create a review</Text>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ReviewForm;