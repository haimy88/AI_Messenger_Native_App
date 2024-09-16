import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {AuthProvider} from './src/contexts/AuthContext';
import LogoComponent from './src/components/LogoComponent';
import InputStack from './src/components/InputStack';
import ButtonStack from './src/components/ButtonStack';

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <LogoComponent />
        <InputStack />
        <ButtonStack />
        <Toast />
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
