import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Slider,
  Switch,
} from '@mui/material';

import UserDataForm from './UserDataForm';
import AddressForm from './AddressForm';
import CommunicationForm from './CommunicationForm';
import userAPI from '../../api/userAPI';

const UserSettings = ({ user, isLoading }) => {
  const [updateFailed, setUpdateFailed] = useState(false); // State to track update failure
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    url: '',
    description: '',
    logo: '',
    phone: '',
    website: '',
    tags: [],
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    summary: {
      satisfaction: 0,
      importance: 0, // Initialize importance with a default value
      subject: '',
      category: '',
      content: '',
    },
    sendEmaile: [{
      date: Date,
      customerName: [String],
      email: [String],
      urgency: Number,
      importance: Number,
      customerSatisfaction: Number,
      customerStrength: Number,
      hour: String
  }],
  });

  const [changedData, setChangedData] = useState({});

  const setAllFields = (field, value) => {
    // Update the userData state
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));

    // Update the changedData state
    setChangedData((prevChangedData) => ({
      ...prevChangedData,
      [field]: value,
    }));
  };

  
  
  const handleSubmit = async (e) => {
    setUpdateFailed(true);
    e.preventDefault();
    try {
      setUpdateFailed(true);
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('Token does not exist');
        return;
      }
      const data = await userAPI.updateUser(token, changedData); // Send only changed data
      await setUserData(data);
    } catch (error) {
      console.error('Error updating user data:', error);
      setUpdateFailed(false);
    }
    setUpdateFailed(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">User Data</Typography>
          </Grid>
          <UserDataForm userData={userData} setAllFields={setAllFields} />
          <AddressForm userData={userData} setAllFields={setAllFields} />
          <CommunicationForm userData={userData} setAllFields={setAllFields} />
          <Grid item xs={12}>
          <Button
              id="save-button"
              variant="contained"
              color="primary"
              type="submit"
              disabled={updateFailed} // Disable the button when updateFailed is true
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserSettings;
