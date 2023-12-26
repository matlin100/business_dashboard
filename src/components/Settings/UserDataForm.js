import React from 'react';
import { Grid, TextField, Switch, Typography } from '@mui/material';

const UserDataForm = ({ userData, setAllFields }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={userData.name}
          onChange={(e) => setAllFields('name', e.target.value)}
        />
      </Grid>
      {/* Other user data fields */}
      <Grid item xs={12} sm={6}>
        <Typography>Some Switch</Typography>
        <Switch
          name="someSwitch"
          checked={userData.someSwitch || false} // Ensure a default value (false if undefined)
          onChange={(e) => setAllFields('someSwitch', e.target.checked)}
        />
      </Grid>
      {/* Additional user data fields */}
    </>
  );
};

export default UserDataForm;
