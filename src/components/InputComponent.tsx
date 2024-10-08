import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
  iconName?: string;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  isPassword = false,
  iconName,
  value,
  onChangeText,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(!isPassword);

  const iconMap: {[key: string]: any} = {
    LockIcon: require('../../assets/images/LockIcon.png'),
    ViewIcon: require('../../assets/images/ViewIcon.png'),
    EmailIcon: require('../../assets/images/EmailIcon.png'),
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {iconName && <Image source={iconMap[iconName]} style={styles.icon} />}
      <TextInput
        style={[styles.input, iconName && styles.inputWithIcon]}
        placeholder={placeholder}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor="#A9A9A9"
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.viewIconContainer}>
          <Image source={iconMap['ViewIcon']} style={styles.viewIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 4,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{translateY: -12}],
    width: 24,
    height: 24,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 8,
    paddingLeft: 40,
    color: '#333333',
    height: 40,
  },
  inputWithIcon: {
    paddingLeft: 40,
  },
  viewIconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -12}],
  },
  viewIcon: {
    width: 24,
    height: 24,
  },
});

export default InputComponent;
