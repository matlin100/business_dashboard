import React from 'react';
import { Grid, TextField, Slider, Switch, Typography } from '@mui/material';

const AddressForm = ({ userData, setAllFields }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Street"
          name="street"
          value={userData.address.street}
          onChange={(e) =>
            setAllFields('address', {
              ...userData.address,
              street: e.target.value,
            })
          }
        />
      </Grid>
      {/* Other address fields */}
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Importance</Typography>
        <Slider
          value={userData.summary.importance}
          onChange={(e, value) =>
            setAllFields('summary', {
              ...userData.summary,
              importance: value,
            })
          }
          min={0}
          max={10}
          step={1}
          valueLabelDisplay="auto"
        />
      </Grid>
      {/* Additional address fields */}
    </>
  );
};

export default AddressForm;
