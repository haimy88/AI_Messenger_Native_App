import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const LoginTextComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Log in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3949AB',
    fontFamily: 'Lato-Regular',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default LoginTextComponent;
