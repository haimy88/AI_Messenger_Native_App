import React, {createContext, useState, ReactNode} from 'react';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import authService from '../services/authService';

interface AuthContextType {
  register: () => Promise<void>;
  loading: boolean;
  error: string | null;
  clearFormAndState: () => void;
  password: string | '';
  email: string | undefined;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  isEmailValid: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [user, setUser] = useState<{email: string} | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const register = async () => {
    setLoading(true);
    setError(null);

    if (!isEmailValid) {
      setError('Invalid email format.');
      Toast.show({
        topOffset: 80,
        type: 'error',
        text1: 'Invalid email',
        text2: 'Please enter a valid email address.',
      });
      setLoading(false);
      return;
    }

    try {
      await authService.register(email, password);
      setUser({email});

      const toastMessage = await authService.triggerToast(email);
      Toast.show({
        topOffset: 80,
        type: 'success',
        text1: 'Registration successful!',
        text2: toastMessage,
      });
    } catch (err) {
      let errorMessage: string;

      if (typeof err === 'string') {
        errorMessage = err;
      } else if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || 'Failed to register';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage = 'An unknown error occurred';
      }

      setError(errorMessage);

      Toast.show({
        topOffset: 80,
        type: 'error',
        text1: 'Registration failed',
        text2: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setIsEmailValid(validateEmail(email));
  };

  const clearFormAndState = () => {
    setUser(null);
    setError(null);
    setEmail('');
    setPassword('');
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        clearFormAndState,
        password,
        setEmail: handleEmailChange,
        setPassword,
        register,
        loading,
        error,
        isEmailValid,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
