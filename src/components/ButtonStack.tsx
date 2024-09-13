import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginButtonComponent from './LoginButtonComponent';
import SocialButtonsComponent from './SocialButtonsComponent';

const ButtonStack: React.FC = () => {
  return (
    <View style={styles.buttonStackContainer}>
      <LoginButtonComponent />
      <SocialButtonsComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStackContainer: {
    width: 300, // Fill width to match Figma design
    justifyContent: 'center', // Aligns content in the center
    alignItems: 'stretch', // Ensure buttons stretch to fill width
    gap: 16, // Spacing between buttons (for React Native, you might use marginBottom for individual buttons)
  },
});

export default ButtonStack;
