// src/components/LoginTextComponent.tsx
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LoginTextComponent: React.FC = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.loginText}>Log in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
});

export default LoginTextComponent;
