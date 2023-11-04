import axios from 'axios';

const API_URL = 'https://fakeapi.platzi.com/en/rest/auth-jwt';

export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    const { access_token, refresh_token } = response.data;
    return { access_token, refresh_token };
  } catch (error) {
    throw new Error('Authentication failed');
  }
};

// You can add more API-related functions here
