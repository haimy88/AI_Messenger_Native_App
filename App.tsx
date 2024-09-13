import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import LogoComponent from './src/components/LogoComponent';
import LoginTextComponent from './src/components/LoginTextComponent'; // Import the new LoginTextComponent
import InputComponent from './src/components/InputComponent';
import LoginButtonComponent from './src/components/LoginButtonComponent';
import SocialButtonsComponent from './src/components/SocialButtonsComponent';
import RegisterComponent from './src/components/RegisterButtonComponent';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoComponent />
      <LoginTextComponent />
      <InputComponent placeholder="Email" />
      <InputComponent placeholder="Password" isPassword={true} />
      <LoginButtonComponent />
      <SocialButtonsComponent />
      <RegisterComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default App;
