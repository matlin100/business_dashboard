import axios from 'axios';

async function fetchUserData(token) {
  try {
    const response = await axios.get('http://localhost:3000/auth/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    throw error;
  }
}

export default {
  fetchUserData,
};