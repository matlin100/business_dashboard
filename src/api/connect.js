// src/api/api.js

import axios from 'axios';

const BASE_URL = 'https://clientmanagementserver.azurewebsites.net'; // Update with your actual API URL

const api = axios.create({
  baseURL: BASE_URL,
});

// Define a function to make the login request
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    return response;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    throw error;
  }
};

export const registerUser = async (name, email, password, description) => {
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
        description,
      });
      return response;
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
      throw error;
    }
  };
