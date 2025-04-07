import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import mockData from '../mockData';
import styles from '../styles/styles';

const EditProfile = ({ navigation, route }) => {
    const { profileId } = route.params;
    const [profile, setProfile] = useState(null);
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const foundProfile = mockData.profiles.find(p => p.id === profileId);
        if (foundProfile) {
            setProfile(foundProfile);
            setUsername(foundProfile.username);
            setAvatar(foundProfile.avatar);
            setBio(foundProfile.bio);
            setPhoneNumber(foundProfile.phoneNumber);
            setEmail(foundProfile.email);
        }
    }, [profileId]);

    const handleSave = () => {
        // Implement logic to update the profile data in your mockData or backend
        console.log('Profile updated:', { username, avatar, bio, phoneNumber, email });
        navigation.goBack(); // Navigate back to the Profiles screen
    };

    if (!profile) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.authTitle}>Edit Profile</Text>
            <TextInput
                style={styles.authInput}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.authInput}
                placeholder="Avatar URL"
                value={avatar}
                onChangeText={setAvatar}
            />
            <TextInput
                style={styles.authInput}
                placeholder="Bio"
                value={bio}
                onChangeText={setBio}
            />
            <TextInput
                style={styles.authInput}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TextInput
                style={styles.authInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.authButton} onPress={handleSave}>
                <Text style={styles.authButtonText}>Save</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default EditProfile;