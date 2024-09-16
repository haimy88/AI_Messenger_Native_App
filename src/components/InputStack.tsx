import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import InputComponent from './InputComponent';
import ForgotPasswordComponent from './ForgotPasswordComponent';
import {AuthContext} from '../contexts/AuthContext';

const InputStack: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const {email, setEmail, password, setPassword} = authContext;

  return (
    <View style={styles.inputStackContainer}>
      <InputComponent
        placeholder="Email"
        iconName="EmailIcon"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputComponent
        placeholder="Password"
        iconName="LockIcon"
        isPassword={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <ForgotPasswordComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStackContainer: {
    width: 300,
    gap: 16,
  },
});

export default InputStack;
