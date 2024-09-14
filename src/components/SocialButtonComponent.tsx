import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

interface SocialButtonProps {
  iconPath: any;
  buttonText: string;
}

const SocialButtonComponent: React.FC<SocialButtonProps> = ({
  iconPath,
  buttonText,
}) => {
  return (
    <TouchableOpacity style={styles.socialButton}>
      <Image source={iconPath} style={styles.icon} />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#3949AB',
    borderWidth: 1,
    borderRadius: 25,
    width: 146,
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3949AB',
  },
});

export default SocialButtonComponent;
