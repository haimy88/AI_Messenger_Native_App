import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const LogoComponent: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../images/Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 49,
    height: 49,
  },
});

export default LogoComponent;
