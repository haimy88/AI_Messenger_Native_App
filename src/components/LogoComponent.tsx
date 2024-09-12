// /src/components/LogoComponent/LogoComponent.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LogoComponent: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>S</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
});

export default LogoComponent;
