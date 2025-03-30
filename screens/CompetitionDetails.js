import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, Pressable } from 'react-native';
import styles from '../styles/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import mockData from '../mockData';

const CompetitionDetails = ({ route }) => {
    const { competition } = route.params;
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('competition'); // 'competition' or 'leaderboard'

    // Get entries for this competition
    const competitionEntries = mockData.submitted_entries
        .filter(entry => entry.competition_id === competition.id)
        .map(entry => {
            const profile = mockData.profiles.find(p => p.id === entry.profile_id);
            return {
                ...entry,
                profileName: profile?.name || 'Unknown',
                profileAvatar: profile?.avatar
            };
        })
        .sort((a, b) => b.views - a.views); // Sort by views descending

    const renderLeaderboardItem = ({ item, index }) => (
        <View style={[styles.competitionCard, { marginBottom: 10 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', width: 30 }}>{index + 1}</Text>
                <Image 
                    source={{ uri: item.profileAvatar }} 
                    style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} 
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.competitionTitle}>{item.profileName}</Text>
                    <Text style={styles.competitionNiche}>{item.views} views</Text>
                </View>
                {index < competition.prize_distribution.length && (
                    <Text style={styles.prizeText}>
                        ${competition.prize_distribution[index].amount}
                    </Text>
                )}
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            {/* Tab Segments */}
            <View style={styles.toggleContainer}>
                <Pressable 
                    style={[styles.toggleButton, activeTab === 'competition' && styles.activeButton]} 
                    onPress={() => setActiveTab('competition')}
                >
                    <Text style={[styles.toggleText, activeTab === 'competition' && styles.activeText]}>Competition</Text>
                </Pressable>
                <Pressable 
                    style={[styles.toggleButton, activeTab === 'leaderboard' && styles.activeButton]} 
                    onPress={() => setActiveTab('leaderboard')}
                >
                    <Text style={[styles.toggleText, activeTab === 'leaderboard' && styles.activeText]}>Leaderboard</Text>
                </Pressable>
            </View>

            {activeTab === 'competition' ? (
                <ScrollView contentContainerStyle={styles.competitionDetailsContainer}>
                    <Image source={{ uri: competition.cover }} style={styles.competitionDetailsImage} />
                    <Text style={styles.competitionDetailsTitle}>{competition.name}</Text>
                    <Text style={styles.competitionDetailsNiche}>{competition.niche}</Text>
                    <View style={styles.brandRow}>
                        <Image source={{ uri: competition.brandLogo }} style={styles.brandLogo} />
                        <Text style={styles.brandName}>{competition.brandName}</Text>
                    </View>
                    <Text style={styles.competitionDetailsText}>Prize: ${competition.prize}</Text>
                    <Text style={styles.competitionDetailsText}>Posted On: {competition.date}</Text>
                    <Text style={competition.active ? styles.competitionActive : styles.competitionInactive}>
                        {competition.active ? "Active" : "Ended"}
                    </Text>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Competition Description</Text>
                        <Text style={styles.sectionText}>{competition.comp_descrip}</Text>
                    </View>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Prize Winnings Distribution</Text>
                        {competition.prize_distribution.map((item, index) => (
                            <Text key={index} style={styles.sectionText}>
                                {item.place} Place: ${item.amount}
                            </Text>
                        ))}
                    </View>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Accepted Entry Examples</Text>
                        <Text style={styles.sectionText}>{competition.entry_examp}</Text>
                    </View>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Rules</Text>
                        <Text style={styles.sectionText}>{competition.rules}</Text>
                    </View>
                </ScrollView>
            ) : (
                <FlatList
                    data={competitionEntries}
                    renderItem={renderLeaderboardItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ padding: 10 }}
                    ListEmptyComponent={
                        <Text style={[styles.emptyText, { textAlign: 'center', marginTop: 20 }]}>
                            No entries yet
                        </Text>
                    }
                />
            )}

            {competition.active && activeTab === 'competition' && (
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigation.navigate('SubmitComp', { competitionId: competition.id })}
                >
                    <Text style={styles.submitButtonText}>Submit Created Content</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CompetitionDetails;