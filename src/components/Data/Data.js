import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TagIcon from '@mui/icons-material/Tag';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';

const useStyles = makeStyles((theme) => ({
  highlighted: {
    backgroundColor: 'rgba(0, 0, 255, 0.2)', // Adjust the blue overlay as needed
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0)
  }
}));

const UserData = ({ user, isLoading }) => {
  const classes = useStyles();
  const [expandedSections, setExpandedSections] = React.useState({});

  const handleExpandClick = (section) => {
    setExpandedSections({ ...expandedSections, [section]: !expandedSections[section] });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>No user data available</div>;
  }


  return (
    <Grid container spacing={2}>
      {/* User Details */}
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>User Information</Typography>
            <List>
              {user.name && <ListItem><ListItemIcon><InfoIcon /></ListItemIcon><ListItemText primary="Name" secondary={user.name} /></ListItem>}
              {user.email && <ListItem><ListItemIcon><InfoIcon /></ListItemIcon><ListItemText primary="Email" secondary={user.email} /></ListItem>}
              {user.phone && <ListItem><ListItemIcon><InfoIcon /></ListItemIcon><ListItemText primary="Phone" secondary={user.phone} /></ListItem>}
              {user.url && <ListItem><ListItemIcon><InfoIcon /></ListItemIcon><ListItemText primary="Website" secondary={<a href={user.url} target="_blank" rel="noopener noreferrer">{user.url}</a>} /></ListItem>}
              {user.logo && <ListItem><img src={user.logo} alt="User Logo" style={{ maxWidth: '100%' }} /></ListItem>}
              {user.description && <ListItem><ListItemIcon><DescriptionIcon /></ListItemIcon><ListItemText primary="Description" secondary={user.description} /></ListItem>}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Address */}
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Address</Typography>
            <List>
              {user.address && (
                <>
                  {user.address.street && <ListItem><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="Street" secondary={user.address.street} /></ListItem>}
                  {user.address.city && <ListItem><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="City" secondary={user.address.city} /></ListItem>}
                  {user.address.state && <ListItem><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="State" secondary={user.address.state} /></ListItem>}
                  {user.address.zip && <ListItem><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="Zip" secondary={user.address.zip} /></ListItem>}
                </>
              )}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Tags */}
      <Grid item xs={6}>
      <Card className={expandedSections['tags'] ? classes.highlighted : ''}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Tags
              <IconButton onClick={() => handleExpandClick('tags')} aria-expanded={expandedSections['tags']} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
            <Collapse in={expandedSections['tags']} timeout="auto" unmountOnExit>
              <List>
                {user.tags && user.tags.map((tag, index) => (
                  <ListItem key={index}><ListItemIcon><TagIcon /></ListItemIcon><ListItemText primary={tag} /></ListItem>
                ))}
              </List>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>


      {/* Communication */}
      <Grid item xs={6}>
      <Card className={expandedSections['communication'] ? classes.highlighted : ''}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Communication
              <IconButton onClick={() => handleExpandClick('communication')} aria-expanded={expandedSections['communication']} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
            <Collapse in={expandedSections['communication']} timeout="auto" unmountOnExit>
              <List>
                {user.communication && user.communication.map((comm, index) => (
                  <ListItem key={index}>
                    <ListItemIcon><ChatIcon /></ListItemIcon>
                    <ListItemText primary={`${comm.customerName.join(', ')} - ${new Date(comm.date).toLocaleDateString()}`} secondary={comm.content} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
         {/* Recommendations */}
         <Grid item xs={12}>
         <Card className={expandedSections['recommendations'] ? classes.highlighted : ''}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recommendations
              <IconButton onClick={() => handleExpandClick('recommendations')} aria-expanded={expandedSections['recommendations']} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
            <Collapse in={expandedSections['recommendations']} timeout="auto" unmountOnExit>
              <List>
                {user.recommend && user.recommend.map((recommendation, index) => (
                  <ListItem key={index}><ListItemIcon><ThumbUpIcon /></ListItemIcon><ListItemText primary={recommendation} /></ListItem>
                ))}
              </List>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
      {/* Additional sections can be added following the same pattern */}
    </Grid>
  );
};

export default UserData;
