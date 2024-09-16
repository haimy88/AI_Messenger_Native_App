import React from 'react';
import {View} from 'react-native';
import LogoComponent from './LogoComponent';
import LoginTextComponent from './LoginTextComponent';
import InputStack from './InputStack';
import ButtonStack from './ButtonStack';

const AuthForm = () => {
  return (
    <View>
      <LogoComponent />
      <LoginTextComponent />
      <InputStack />
      <ButtonStack />
    </View>
  );
};

export default AuthForm;
