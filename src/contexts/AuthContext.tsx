import React, {createContext, useState, ReactNode} from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';

interface AuthContextType {
  register: () => Promise<void>;
  loading: boolean;
  error: string | null;
  clearFormAndState: () => void;
  password: string | undefined;
  email: string | undefined;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
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

  const register = async () => {
    setLoading(true);
    setError(null);
    console.log(
      'Attempting to register with email:',
      email,
      'and password:',
      password,
    );
    try {
      const response = await axios.post(
        'https://registrationserver.azurewebsites.net/register',
        {
          username: email,
          password: password,
        },
      );
      console.log('Registration response:', response.data);

      setUser({email});
      console.log('User set after registration:', {email});

      const toastResponse = await axios.post('http://localhost:8000/toast', {
        username: email,
      });
      console.log('Toast message response:', toastResponse.data);

      Toast.show({
        type: 'success',
        text1: 'Registration successful!',
        text2: toastResponse.data.message,
      });
    } catch (err) {
      console.error('Error during registration:', err);
      setError('Registration failed.');
      Toast.show({
        type: 'error',
        text1: 'Registration failed',
        text2: 'Please try again.',
      });
    } finally {
      setLoading(false);
      console.log('Loading state set to false after registration attempt.');
    }
  };

  const clearFormAndState = () => {
    setUser(null);
    setError(null);
    setEmail('');
    setPassword('');
    console.log('Form and state cleared.');
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        clearFormAndState,
        password,
        setEmail,
        setPassword,
        register,
        loading,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
