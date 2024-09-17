import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
          iconPath={require('../../assets/images/GoogleIcon.png')}
          buttonText="Google"
        />
        <SocialButtonComponent
          iconPath={require('../../assets/images/FacebookIcon.png')}
          buttonText="Facebook"
        />
      </View>
      <Text style={styles.haveAccountText}>Have no account yet?</Text>
      <RegisterButtonComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStackContainer: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  haveAccountText: {
    color: '#7B7B7B',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 8,
  },
});

export default ButtonStack;
