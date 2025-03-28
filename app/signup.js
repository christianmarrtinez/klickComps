// app/signup.js (was screens/SignUp.js)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';
import mockData from '../mockData';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
  
    // Check if username already exists
    const existingUser = mockData.profiles.find(profile => profile.username === username);
    if (existingUser) {
      Alert.alert('Error', 'Username already exists');
      return;
    }
  
    // Create new profile
    const newProfile = {
      id: mockData.profiles.length + 101, // Ensuring unique ID
      username,
      password,
      name: username, 
      avatar: `https://via.placeholder.com/100.png?text=${username}`,
    };
  
    // Add to profiles array
    mockData.profiles.push(newProfile);
  
    // Store the current profile globally
    global.currentProfile = newProfile;
  
    console.log("Updated Profiles:", mockData.profiles); // Debugging
  
    // Navigate to main app
    router.replace('/main');
  };
  

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Create an Account</Text>
      
      <TextInput
        style={styles.authInput}
        placeholder="Username"
        placeholderTextColor='#8b51ff'
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.authInput}
        placeholder="Password"
        placeholderTextColor='#8b51ff'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.authButton} onPress={handleSignUp}>
        <Text style={styles.authButtonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/signin')}>
        <Text style={styles.authLink}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;