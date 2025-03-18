import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles';

const SubmitComp = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { competitionId } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Select Social Media Account</Text>
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => navigation.navigate('SC_ig', { competitionId: competitionId })}
            >
                <Text style={styles.categoryText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => navigation.navigate('SC_snap', { competitionId: competitionId })}
            >
                <Text style={styles.categoryText}>Snapchat</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => navigation.navigate('SC_tik', { competitionId: competitionId })}
            >
                <Text style={styles.categoryText}>TikTok</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SubmitComp;