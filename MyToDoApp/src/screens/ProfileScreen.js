import React, { useState } from 'react';
import UserProfile from './UserProfile';

const ProfileScreen = ({ navigation }) => {
  const [user] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    // Add more user data as needed
  });

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear user data and navigate to the login screen).
    // You can use AsyncStorage or a similar storage method to manage user data.
    navigation.navigate('Login');
  };

  return <UserProfile user={user} onLogout={handleLogout} />;
};

export default ProfileScreen;
