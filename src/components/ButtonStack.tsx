import React from 'react';
import {View, StyleSheet} from 'react-native';
import SocialButtonComponent from './SocialButtonComponent';
import LoginButtonComponent from './LoginButtonComponent';
import RegisterButtonComponent from './RegisterButtonComponent';
import DividerComponent from './DividerComponent';

const ButtonStack: React.FC = () => {
  return (
    <View style={styles.buttonStackContainer}>
      <LoginButtonComponent />
      <DividerComponent />
      <View style={styles.socialButtonsRow}>
        <SocialButtonComponent
          iconPath={require('../images/GoogleIcon.png')}
          buttonText="Google"
        />
        <SocialButtonComponent
          iconPath={require('../images/FacebookIcon.png')}
          buttonText="Facebook"
        />
      </View>
      <RegisterButtonComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStackContainer: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 100,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ButtonStack;
