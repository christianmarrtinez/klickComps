import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles';
import mockData from '../mockData';

const SubmitComp = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { competitionId } = route.params;

    const linkedAccounts = mockData.linked_accounts; // Fetch linked accounts

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
            <FlatList
                data={linkedAccounts}
                renderItem={renderAccount}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.accountList}
            />
        </View>
    );
};

export default SubmitComp;