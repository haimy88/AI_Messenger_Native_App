import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  isPassword = false,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        placeholderTextColor="#A9A9A9"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    color: '#333333',
  },
});

export default InputComponent;
