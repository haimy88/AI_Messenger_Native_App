import React, {useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

const LoginButtonComponent: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const {isEmailValid, password} = authContext;

  const isFormValid = isEmailValid && password.length > 0;

  return (
    <TouchableOpacity
      style={[styles.loginButton, isFormValid && styles.loginButtonEnabled]}
      disabled={!isFormValid}>
      <Text style={styles.loginButtonText}>Log in</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#A4A8D1', // Default background color
    height: 40, // Fixed height
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  loginButtonEnabled: {
    backgroundColor: '#3949AB',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Lato',
  },
});

export default LoginButtonComponent;
