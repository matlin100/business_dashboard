import React from 'react';
import { Grid, TextField, Slider, Typography } from '@mui/material';
import {
  LocationOn,
  LocationCity,
  LocationOnOutlined,
  LocationCityOutlined,
  LocationSearching,
  MarkunreadMailbox,
} from '@mui/icons-material'; // Import icons

const AddressForm = ({ userData, setAllFields }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <div className="address-field">
          <LocationOn className="address-icon" /> {/* Icon */}
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
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="address-field">
          <LocationCity className="address-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="City"
            name="city"
            value={userData.address.city}
            onChange={(e) =>
              setAllFields('address', {
                ...userData.address,
                city: e.target.value,
              })
            }
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="address-field">
          <LocationSearching className="address-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="State"
            name="state"
            value={userData.address.state}
            onChange={(e) =>
              setAllFields('address', {
                ...userData.address,
                state: e.target.value,
              })
            }
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="address-field">
          <MarkunreadMailbox className="address-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="ZIP"
            name="zip"
            value={userData.address.zip}
            onChange={(e) =>
              setAllFields('address', {
                ...userData.address,
                zip: e.target.value,
              })
            }
          />
        </div>
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
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Typography variant="h6">Satisfaction</Typography>
          <Slider
            value={userData.satisfaction}
            onChange={(e, value) =>
              setAllFields('satisfaction', value)
            }
            min={0}
            max={10}
            step={1}
            valueLabelDisplay="auto"
          />
        </div>
      </Grid>
      {/* Additional address fields */}
      <style>
        {`
          .address-field {
            display: flex;
            align-items: center;
            margin-bottom: 16px; /* Add spacing between address fields */
          }
          
          .address-icon {
            margin-right: 8px;
            color: #007BFF; /* You can change the color as needed */
          }
        `}
      </style>
    </>
  );
};

export default AddressForm;
