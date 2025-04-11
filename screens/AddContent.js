import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';
import mockData from '../mockData';

const AddContent = () => {
  const navigation = useNavigation();
  const profileId = global.currentProfile?.id;

  // Filter linked accounts for current profile
  const linkedAccounts = mockData.linked_accounts.filter(
    account => account.profile_id === profileId
  );

  // Add a "Link New Account" item to the data array
  const data = [
    ...linkedAccounts,
    { id: 'add-account', isAddButton: true }
  ];

  const renderAccount = ({ item }) => {
    if (item.isAddButton) {
        return (
          <TouchableOpacity
            style={[styles.accountButton, { 
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }]}
            onPress={() => navigation.navigate('LinkAccount')}
          >
            <Ionicons name="add-circle" size={24} color="#8b51ff" />
            <Text style={[styles.accountUsername, { marginLeft: 10 }]}>
              Link New Account
            </Text>
          </TouchableOpacity>
        );
      }

    return (
      <TouchableOpacity
        style={styles.accountButton}
        onPress={() => {
          // Navigate to content selection for this account
          navigation.navigate('AccountContent', { 
            accountId: item.id,
            social: item.social 
          });
        }}
      >
        <Image source={item.profile_pic} style={styles.accountImage} />
        <View>
          <Text style={styles.accountUsername}>{item.username}</Text>
          <Text style={styles.competitionNiche}>
            {item.social === 'ig' ? 'Instagram' : 
             item.social === 'snap' ? 'Snapchat' : 'TikTok'} • {item.followers.toLocaleString()} followers
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.submitCompTitle}>Select Account to Add Content</Text>
      
      <FlatList
        data={data}
        renderItem={renderAccount}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.accountList}
      />
    </View>
  );
};

export default AddContent;