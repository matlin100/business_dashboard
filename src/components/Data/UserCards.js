import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Collapse, Grid, IconButton, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const UserCards = ({ customerDetails }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Grid container spacing={2}>
      {customerDetails.map((customer, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box display="flex" height="100%">
            <Card style={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h5">{customer.name}</Typography>
                <Typography variant="subtitle1">
                  <EmailIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 5 }} />
                  {customer.email}
                </Typography>
                <Typography variant="body2">{customer.somryRecommend[0]}</Typography>
                <Button 
                  startIcon={expandedId === customer._id ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
                  onClick={() => handleExpandClick(customer._id)}
                >
                  Recommendations
                </Button>
                <Collapse in={expandedId === customer._id} timeout="auto" unmountOnExit>
                  <Typography paragraph>{customer.Recommend[0]}</Typography>
                </Collapse>
                <Typography variant="caption">
                  <DateRangeIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 5 }} />
                  {new Date(customer.date).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCards;
