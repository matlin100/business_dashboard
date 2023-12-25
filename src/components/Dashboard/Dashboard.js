import {React, useState, useEffect} from 'react';
import { Container, Typography } from '@mui/material';
import Settings from '../Settings/Settings'; // Adjust the path as necessary
import Graphs from '../Graphs/Graphs';   // Adjust the path as necessary
import UserData from '../Data/Data';       // Adjust the path as necessary
import Sidebar from './sidmar';
import Header from './Header';
import Footer from './Footer';
import userAPI from '../../api/userAPI'

function Dashboard({ userLoggedIn }) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          console.log('Token does not exist');
          setIsLoading(false);
          return;
        }
        const data = await userAPI.fetchUserData(token);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userLoggedIn) {
      fetchUserData();
    }
  }, [userLoggedIn]);

  return (
    
    <Container maxWidth="lg">
       <Header />  
       <Sidebar />
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
        
      {/* Integrating Settings Component */}
      <section>
        <Typography variant="h4" gutterBottom>Settings</Typography>
        <Settings />
      </section>

      {/* Integrating Graphs Component */}
      <section>
        <Typography variant="h4" gutterBottom>Graphs</Typography>
        <Graphs />
      </section>

      {/* Integrating Data Component */}
      <section>
        <Typography variant="h4" gutterBottom>Data</Typography>
        <UserData user={userData?.user} isLoading={isLoading} />
      </section>
      <Footer />
    </Container>
  );
}

export default Dashboard;