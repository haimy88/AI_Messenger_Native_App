import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DividerComponent: React.FC = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text style={styles.dividerText}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    width: 215,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A4A8D1',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#A4A8D1',
    fontWeight: 'bold',
  },
});

export default DividerComponent;
