import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (email, password) => {
    // Implement your authentication logic here.
    // You can make an API request or perform any other authentication process.
    if (email && password) {
      // If authentication is successful, navigate to the next screen (e.g., HomeScreen).
      navigation.navigate('Home');
    } else {
      // Handle authentication failure (e.g., display an error message).
      alert('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
