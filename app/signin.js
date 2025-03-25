// screens/SignIn.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';
import mockData from '../mockData';

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const user = mockData.profiles.find(
      profile => profile.username === username && profile.password === password
    );

    if (!user) {
      Alert.alert('Error', 'Invalid username or password');
      return;
    }

    global.currentProfile = user;

    // Navigate to main app using expo-router
    router.replace('/main'); 
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Sign In</Text>
      
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
      
      <TouchableOpacity style={styles.authButton} onPress={handleSignIn}>
        <Text style={styles.authButtonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.authLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;