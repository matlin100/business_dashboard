import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Collapse, Grid, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SpeedIcon from '@mui/icons-material/Speed';
import StarRateIcon from '@mui/icons-material/StarRate';
import MoodIcon from '@mui/icons-material/Mood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const calculateAverages = (chats) => {
  const totals = chats.reduce((acc, chat) => {
    acc.urgency += chat.urgency;
    acc.importance += chat.importance;
    acc.customerSatisfaction += chat.customerSatisfaction;
    acc.customerStrength += chat.customerStrength;
    acc.satisfaction += chat.satisfaction;
    acc.friendly += chat.friendly;
    return acc;
  }, { urgency: 0, importance: 0, customerSatisfaction: 0, customerStrength: 0, satisfaction: 0, friendly: 0 });

  const count = chats.length;
  return {
    urgency: totals.urgency / count,
    importance: totals.importance / count,
    customerSatisfaction: totals.customerSatisfaction / count,
    customerStrength: totals.customerStrength / count,
    satisfaction: totals.satisfaction / count,
    friendly: totals.friendly / count
  };
};

const UserCards = ({ customerDetails ,isLoading }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!customerDetails || customerDetails.length === 0) {
    return <div>No customer data available</div>;
  }

  return (
    <Grid container spacing={2}>
      {customerDetails.map((customer) => {
        const averages = calculateAverages(customer.chat);
        return (
          <Grid item xs={12} sm={6} md={4} key={customer._id}>
            <Card>
              <CardContent>
              <Box display="flex" alignItems="center">
                <Typography variant="h5" style={{ marginRight: '90px' }}>{customer.name}</Typography>
                <Typography variant="caption">
                    <DateRangeIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                    {new Date(customer.date).toLocaleString()}
                </Typography>
                </Box>
                <Typography variant="subtitle1">
                  <EmailIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 5 }} />
                  {customer.email}
                </Typography>
                <Typography variant="body2">{customer.somryRecommend[0]}</Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <SpeedIcon fontSize="small" />
                    <Typography variant="caption" style={{ fontSize: 'xx-small' }}>Urgent</Typography>
                    <Typography variant="body2" style={{ marginLeft: 5 }}>{averages.urgency.toFixed(1)}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <StarRateIcon fontSize="small" />
                    <Typography variant="caption" style={{ fontSize: 'xx-small' }}>Priority</Typography>
                    <Typography variant="body2" style={{ marginLeft: 5 }}>{averages.importance.toFixed(1)}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <MoodIcon fontSize="small" />
                    <Typography variant="caption" style={{ fontSize: 'xx-small' }}>Satisfaction</Typography>
                    <Typography variant="body2" style={{ marginLeft: 5 }}>{averages.customerSatisfaction.toFixed(1)}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <FitnessCenterIcon fontSize="small" />
                    <Typography variant="caption" style={{ fontSize: 'xx-small' }}>assertiveness</Typography>
                    <Typography variant="body2" style={{ marginLeft: 5 }}>{averages.customerStrength.toFixed(1)}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <ThumbUpIcon fontSize="small" />
                    <Typography variant="caption" style={{ fontSize: 'xx-small' }}>Satisfaction</Typography>
                    <Typography variant="body2" style={{ marginLeft: 5 }}>{averages.satisfaction.toFixed(1)}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <EmojiEmotionsIcon fontSize="small" />
                    <Typography variant="caption" style={{ fontSize: 'xx-small' }}>Friendly</Typography>
                    <Typography variant="body2" style={{ marginLeft: 5 }}>{averages.friendly.toFixed(1)}</Typography>
                  </Box>
                </Box>

                <Button 
                  startIcon={expandedId === customer._id ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
                  onClick={() => handleExpandClick(customer._id)}
                >
                  Recommendations
                </Button>
                <Collapse in={expandedId === customer._id} timeout="auto" unmountOnExit>
                  <Typography paragraph>{customer.Recommend[0]}</Typography>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default UserCards;
