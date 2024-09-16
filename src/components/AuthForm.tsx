import React from 'react';
import {View, StyleSheet} from 'react-native';
import LogoComponent from './LogoComponent';
import LoginTextComponent from './LoginTextComponent';
import InputStack from './InputStack';
import ButtonStack from './ButtonStack';

const AuthForm = () => {
  return (
    <View style={styles.authFormContainer}>
      <LogoComponent />
      <LoginTextComponent />
      <InputStack />
      <ButtonStack />
    </View>
  );
};

const styles = StyleSheet.create({
  authFormContainer: {
    marginBottom: 140,
  },
});

export default AuthForm;
