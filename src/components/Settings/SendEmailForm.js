import React from 'react';
import { Grid, TextField, Slider, Typography } from '@mui/material';

const SendEmailForm = ({ sendEmailData, setSendEmailData }) => {
  return (
    <>
      {sendEmailData.map((emailData, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={emailData.date}
              onChange={(e) => handleFieldChange(index, 'date', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Customer Name"
              value={emailData.customerName}
              onChange={(e) => handleFieldChange(index, 'customerName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Email"
              value={emailData.email}
              onChange={(e) => handleFieldChange(index, 'email', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Urgency</Typography>
            <Slider
              value={emailData.urgency}
              onChange={(e, value) => handleFieldChange(index, 'urgency', value)}
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Importance</Typography>
            <Slider
              value={emailData.importance}
              onChange={(e, value) => handleFieldChange(index, 'importance', value)}
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Customer Satisfaction</Typography>
            <Slider
              value={emailData.customerSatisfaction}
              onChange={(e, value) => handleFieldChange(index, 'customerSatisfaction', value)}
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Customer Strength</Typography>
            <Slider
              value={emailData.customerStrength}
              onChange={(e, value) => handleFieldChange(index, 'customerStrength', value)}
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Hour"
              value={emailData.hour}
              onChange={(e) => handleFieldChange(index, 'hour', e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );

  function handleFieldChange(index, field, value) {
    const updatedEmailData = [...sendEmailData];
    updatedEmailData[index][field] = value;
    setSendEmailData(updatedEmailData);
  }
};

export default SendEmailForm;
