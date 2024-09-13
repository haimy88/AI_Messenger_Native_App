// src/components/LogoComponent.tsx
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
    width: 49, // Adjust width as needed
    height: 49, // Adjust height as needed
    resizeMode: 'contain', // Adjust based on your design
  },
});

export default LogoComponent;
