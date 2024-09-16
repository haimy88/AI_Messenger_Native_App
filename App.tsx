import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AuthForm from './src/components/AuthForm';
import {AuthProvider} from './src/contexts/AuthContext';
import Toast, {
  BaseToast,
  BaseToastProps,
  ToastConfig,
} from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <AuthForm />
        <Toast config={toastConfig} visibilityTime={5000} />
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const toastProps: BaseToastProps = {
  text1Style: {
    fontSize: 18,
  },
  text2Style: {
    fontSize: 14,
  },
  text2NumberOfLines: 0,
  style: {
    height: 'auto',
  },
};

export const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      {...toastProps}
      style={[
        toastProps.style,
        {
          borderLeftColor: '#69C779',
        },
      ]}
    />
  ),
  error: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      {...toastProps}
      style={[
        toastProps.style,
        {
          borderLeftColor: '#FE6301',
        },
      ]}
    />
  ),
  warning: props => (
    <BaseToast
      {...props}
      {...toastProps}
      style={[
        toastProps.style,
        {
          borderLeftColor: '#FFC107',
        },
      ]}
    />
  ),
};

export default App;
