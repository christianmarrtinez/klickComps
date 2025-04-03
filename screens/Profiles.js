import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import mockData from '../mockData';
import styles from '../styles/styles';

const Profiles = () => {
  const profileId = global.currentProfile?.id;
  const profile = mockData.profiles.find(p => p.id === profileId);
  const linkedAccounts = mockData.linked_accounts.filter(acc => acc.profile_id === profileId);

  // Stats calculations
  const competitionsWon = mockData.submitted_entries.filter(
    entry => entry.profile_id === profileId && entry.active
  ).length; // Simplified for demo

  const totalWon = competitionsWon * 500;
  const totalFollowers = linkedAccounts.reduce((sum, acc) => sum + (acc.followers || 0), 0);
  const competitionsEntered = mockData.submitted_entries.filter(e => e.profile_id === profileId).length;

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
            <Text style={styles.competitionNiche}>Comps Won</Text>
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
        <Text style={styles.competitionTitle}>{profile?.username}</Text>
        <Text style={[styles.competitionNiche, { lineHeight: 20 }]}>
          {profile?.name || 'User'} • Digital Creator • 
          Entered {competitionsEntered} competitions
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={[styles.row, { 
        justifyContent: 'space-between', 
        marginBottom: 20 
      }]}>
        <TouchableOpacity style={[styles.button, { 
          flex: 1, 
          marginRight: 10, 
          backgroundColor: 'white' 
        }]}>
          <Text style={[styles.text, { color: '#8b51ff' }]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.searchButton, { flex: 1 }]}>
          <Text style={styles.text}>Add Content</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profiles;