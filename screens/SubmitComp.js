// screens/SubmitComp.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles';
import mockData from '../mockData';

const SubmitComp = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { competitionId } = route.params;

  // Only show linked accounts for the current profile
  const linkedAccounts = mockData.linked_accounts.filter(
    account => account.profile_id === global.currentProfile?.id
  );

  const renderAccount = ({ item }) => (
    <TouchableOpacity
      style={styles.accountButton}
      onPress={() => {
        let screenName;
        if (item.social === 'ig') screenName = 'SC_ig';
        else if (item.social === 'snap') screenName = 'SC_snap';
        else if (item.social === 'tik') screenName = 'SC_tik';
        navigation.navigate(screenName, { competitionId: competitionId });
      }}
    >
      <Image source={item.profile_pic} style={styles.accountImage} />
      <Text style={styles.accountUsername}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.submitCompTitle}>Select Social Media Account</Text>
      {linkedAccounts.length > 0 ? (
        <FlatList
          data={linkedAccounts}
          renderItem={renderAccount}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.accountList}
        />
      ) : (
        <Text style={styles.emptyText}>No linked accounts found for your profile. Please add social media accounts in your profile settings.</Text>
      )}
    </View>
  );
};

export default SubmitComp;