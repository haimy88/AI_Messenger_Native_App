import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

const RegisterButtonComponent: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const {register, loading, error, clearFormAndState} = authContext;

  const handleRegister = () => {
    register().then(() => {
      clearFormAndState();
    });
  };

  return (
    <View style={styles.registerContainer}>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegister}
        disabled={loading}>
        <Text style={styles.registerLink}>
          {loading ? 'Registering...' : 'Register'}
        </Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
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
  registerButton: {
    width: '100%',
    borderColor: '#3949AB',
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerLink: {
    color: '#3949AB',
    fontWeight: '400',
    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default RegisterButtonComponent;
