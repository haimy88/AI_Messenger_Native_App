import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const ForgotPasswordComponent: React.FC = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3949AB', // Color from Figma design
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 15,
  },
});

export default ForgotPasswordComponent;
