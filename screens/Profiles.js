import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import mockData from '../mockData';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Profiles = () => {
    const navigation = useNavigation();
    const profileId = global.currentProfile?.id;
    const profile = mockData.profiles.find(p => p.id === profileId);
    const linkedAccounts = mockData.linked_accounts.filter(acc => acc.profile_id === profileId);

    // Stats calculations
    const competitionsWon = mockData.submitted_entries.filter(
        entry => entry.profile_id === profileId && entry.active
    ).length;

    const totalWon = competitionsWon * 500;
    const totalFollowers = linkedAccounts.reduce((sum, acc) => sum + (acc.followers || 0), 0);

    useEffect(() => {
        if (profile && profile.username) {
            navigation.setOptions({ 
                title: profile.username,
            });
        }
    }, [navigation, profile]);

    return (
        <View style={styles.container}>
            {/* Profile Header Row */}
            <View style={[styles.row, { marginBottom: 15 }]}>
                {/* Avatar */}
                <Image
                    source={{ uri: profile?.avatar }}
                    style={[styles.linkedAccountImage, {
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        borderWidth: 2,
                        borderColor: '#8b51ff'
                    }]}
                />

                {/* Stats */}
                <View style={[styles.row, {
                    flex: 1,
                    justifyContent: 'space-around',
                    marginLeft: 20
                }]}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.prizeText}>{competitionsWon}</Text>
                        <Text style={styles.competitionNiche}>Prizes Won</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.prizeText}>${totalWon}</Text>
                        <Text style={styles.competitionNiche}>Won</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.prizeText}>{totalFollowers}</Text>
                        <Text style={styles.competitionNiche}>Followers</Text>
                    </View>
                </View>
            </View>

            {/* Bio Section */}
            <View style={{ marginBottom: 20 }}>
                <Text style={[styles.competitionNiche, { lineHeight: 20 }]}>
                    {profile?.bio || 'No bio yet'}
                </Text>
            </View>

            {/* Action Buttons */}
            <View style={[styles.row, {
                justifyContent: 'space-between',
                marginBottom: 20
            }]}>
                <TouchableOpacity
                    style={[styles.searchButton, {
                        flex: 1,
                        marginRight: 10,
                    }]}
                    onPress={() => navigation.navigate('EditProfile', { profileId })}
                >
                    <Text style={styles.text}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.searchButton, { flex: 1 }]}>
                    <Text style={styles.text}>Add Content</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Profiles;