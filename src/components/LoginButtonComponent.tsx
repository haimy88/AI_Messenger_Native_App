import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const LoginButtonComponent: React.FC = () => {
  return (
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Log in</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#A4A8D1',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    width: 300,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Lato',
  },
});

export default LoginButtonComponent;
