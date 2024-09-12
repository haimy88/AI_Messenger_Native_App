import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const RegisterComponent: React.FC = () => {
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerText}>Have no account yet?</Text>
      <TouchableOpacity>
        <Text style={styles.registerLink}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  registerText: {
    color: '#A9A9A9',
  },
  registerLink: {
    color: '#A4A8D1',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default RegisterComponent;
