import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputComponent from './InputComponent';
import ForgotPasswordComponent from './ForgotPasswordComponent'; // Add the ForgotPassword component

const InputStack: React.FC = () => {
  return (
    <View style={styles.inputStackContainer}>
      <InputComponent placeholder="Email" />
      <InputComponent placeholder="Password" isPassword={true} />
      <ForgotPasswordComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStackContainer: {
    width: 300,
    gap: 16,
    marginBottom: 20,
  },
});

export default InputStack;
