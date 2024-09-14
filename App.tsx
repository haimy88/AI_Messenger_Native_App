import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LogoComponent from './src/components/LogoComponent';
import LoginTextComponent from './src/components/LoginTextComponent';
import InputStack from './src/components/InputStack'; // New InputStack component
import ButtonStack from './src/components/ButtonStack'; // Already existing ButtonStack
import RegisterComponent from './src/components/RegisterButtonComponent';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoComponent />
      <LoginTextComponent />
      <InputStack />
      <ButtonStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center', // Ensures everything is centered
  },
});

export default App;
