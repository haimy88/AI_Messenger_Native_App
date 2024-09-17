import axios from 'axios';

const authService = {
  async register(email: string, password: string) {
    try {
      const response = await axios.post(
        'https://registrationserver.azurewebsites.net/register',
        { username: email, password }
      );
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw err.response?.data?.message || 'Failed to register';
      } else {
        throw 'An unknown error occurred';
      }
    }
  },

  async triggerToast(email: string) {
    try {
      const response = await axios.post('http://localhost:8000/toast', {
        username: email,
      });
      return response.data.toast;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw err.response?.data?.message || 'Failed to trigger toast';
      } else {
        throw 'An unknown error occurred';
      }
    }
  },
};

export default authService;
