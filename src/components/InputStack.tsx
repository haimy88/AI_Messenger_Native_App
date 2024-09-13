import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputComponent from './InputComponent';
import ForgotPasswordComponent from './ForgotPasswordComponent';

const InputStack: React.FC = () => {
  return (
    <View style={styles.inputStackContainer}>
      <InputComponent placeholder="Email" iconName="EmailIcon" />
      <InputComponent
        placeholder="Password"
        iconName="LockIcon"
        isPassword={true}
      />
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
