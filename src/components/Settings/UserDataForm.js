import React from 'react';
import { Grid, TextField, Switch, Typography } from '@mui/material';
import {
  Person,
  Lock,
  Email,
  Language,
  Description,
  Image,
  Phone,
  Public,
} from '@mui/icons-material'; // Import icons

const UserDataForm = ({ userData, setAllFields }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Person className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={userData.name}
            onChange={(e) => setAllFields('name', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Lock className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Password"
            name="password"
            value={userData.password}
            type="password"
            onChange={(e) => setAllFields('password', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Email className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={userData.email}
            onChange={(e) => setAllFields('email', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Language className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="URL"
            name="url"
            value={userData.url}
            onChange={(e) => setAllFields('url', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Description className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={userData.description}
            multiline
            rows={3}
            onChange={(e) => setAllFields('description', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Image className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Logo"
            name="logo"
            value={userData.logo}
            onChange={(e) => setAllFields('logo', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Phone className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={userData.phone}
            onChange={(e) => setAllFields('phone', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-data-field">
          <Public className="user-data-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Website"
            name="website"
            value={userData.website}
            onChange={(e) => setAllFields('website', e.target.value)}
          />
        </div>
      </Grid>

      <style>
        {`
          .user-data-field {
            display: flex;
            align-items: center;
            margin-bottom: 16px; /* Add spacing between user data fields */
          }
          
          .user-data-icon {
            margin-right: 8px;
            color: #007BFF; /* You can change the color as needed */
          }
        `}
      </style>
    </>
  );
};

export default UserDataForm;
