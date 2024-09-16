import React, {createContext, useState, ReactNode} from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';

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
      const response = await axios.post(
        'https://registrationserver.azurewebsites.net/register',
        {
          username: email,
          password: password,
        },
      );

      setUser({email});

      const toastResponse = await axios.post('http://localhost:8000/toast', {
        username: email,
      });

      Toast.show({
        topOffset: 80,
        type: 'success',
        text1: 'Registration successful!',
        text2: toastResponse.data.toast,
      });
    } catch (err) {
      setError('Registration failed.');
      Toast.show({
        topOffset: 80,
        type: 'error',
        text1: 'Registration failed',
        text2: 'Please try again.',
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
