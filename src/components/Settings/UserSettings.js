import React, { useState, useEffect } from 'react';
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
  const [userData, setUserData] = useState({
    // ...
  });

  const [changedData, setChangedData] = useState({});
  const [updateFailed, setUpdateFailed] = useState(false); // State to track update failure

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
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('Token does not exist');
        return;
      }
      const data = await userAPI.updateUser(token, changedData); // Send only changed data
      // Optionally, you can update the userData state with the response from the server.
      setUserData(data);
      setUpdateFailed(false); // Reset update failure state on success
    } catch (error) {
      console.error('Error updating user data:', error);
      setUpdateFailed(true); // Set update failure state on failure
    }
  };

  // Disable the "Save" button when the updateFailed state is true
  useEffect(() => {
    if (updateFailed) {
      document.getElementById('save-button').disabled = true;
    } else {
      document.getElementById('save-button').disabled = false;
    }
  }, [updateFailed]);

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
