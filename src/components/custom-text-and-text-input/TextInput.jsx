import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style].concat({ borderColor: error && '#d73a4a' });

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;