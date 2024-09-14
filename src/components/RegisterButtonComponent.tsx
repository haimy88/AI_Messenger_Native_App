import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const RegisterComponent: React.FC = () => {
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerText}>Have no account yet?</Text>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerLink}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  registerText: {
    color: '#A9A9A9',
    marginBottom: 10,
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: 'center',
  },
  registerButton: {
    width: '100%',
    borderColor: '#3949AB',
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 10,
    alignItems: 'center',
  },
  registerLink: {
    color: '#3949AB',
    fontWeight: '400',
    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: 'center',
  },
});

export default RegisterComponent;
