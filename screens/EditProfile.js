import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
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
            setBio(foundProfile.bio || '');
            setPhoneNumber(foundProfile.phone_number || '');
            setEmail(foundProfile.email || '');
        }
    }, [profileId]);

    const handleSave = () => {
        console.log('Profile updated:', { username, avatar, bio, phoneNumber, email });
        navigation.goBack();
    };

    if (!profile) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.authTitle}>Edit Profile</Text>

            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
                style={styles.authInput}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <Text style={styles.inputLabel}>Avatar URL</Text>
            <TextInput
                style={styles.authInput}
                placeholder="Avatar URL"
                value={avatar}
                onChangeText={setAvatar}
            />

            <Text style={styles.inputLabel}>Bio</Text>
            <TextInput
                style={styles.authInput}
                placeholder="Bio"
                value={bio}
                onChangeText={setBio}
            />

            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
                style={styles.authInput}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                style={styles.authInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.authButton} onPress={handleSave}>
                <Text style={styles.authButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditProfile;