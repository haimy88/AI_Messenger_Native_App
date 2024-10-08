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
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: '#3949AB',
    borderWidth: 1,
    borderRadius: 25,
    width: 146,
    height: 40,
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#3949AB',
    fontFamily: 'Lato-Regular',
  },
});

export default SocialButtonComponent;
