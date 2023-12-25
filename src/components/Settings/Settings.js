import React, { useState } from 'react';
import { Container, Typography, Switch, FormControlLabel } from '@mui/material';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = (event) => {
    setDarkMode(event.target.checked);
    // Implement logic to toggle dark mode in your app
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleDarkModeToggle}
              name="darkMode"
              color="primary"
            />
          }
          label="Dark Mode"
        />
      </div>

      {/* Add more settings here as needed */}
    </Container>
  );
}

export default Settings;