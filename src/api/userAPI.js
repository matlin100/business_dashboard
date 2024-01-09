import axios from 'axios';

async function fetchUserData(token) {
  try {
    const response = await axios.get('https://clientmanagementserver.azurewebsites.net/auth/user', {
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


async function updateUser(token, data) {
  try {
    const response = await axios.put('https://clientmanagementserver.azurewebsites.net/auth/user', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response)
    if (response.status === 200) {

      return response.data;
    } else {
      throw new Error('Failed to update user data');
    }
  } catch (error) {
    throw error;
  }
}


export default {
  fetchUserData,
  updateUser
};