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

    // Create new profile (in a real app, you'd make an API call)
    const newProfile = {
      id: mockData.profiles.length + 100 + 1, // Simple ID generation
      username,
      password,
      name: username, // Default name is username
      avatar: 'https://via.placeholder.com/100.png?text=' + username
    };

    // Add to mockData (for demo purposes)
    mockData.profiles.push(newProfile);

    // Store current user
    global.currentProfile = newProfile;

    // Navigate to main app
    router.replace('/main');
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Create an Account</Text>
      
      <TextInput
        style={styles.authInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.authInput}
        placeholder="Password"
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