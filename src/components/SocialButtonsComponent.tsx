import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SocialButtonsComponent: React.FC = () => {
  return (
    <View style={styles.socialButtonsContainer}>
      <TouchableOpacity style={styles.socialButton}>
        <Text>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
});

export default SocialButtonsComponent;
