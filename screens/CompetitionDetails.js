import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles/styles';

const CompetitionDetails = ({ route }) => {
    const { competition } = route.params;

    return (
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

            {/* Competition Description */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Competition Description</Text>
                <Text style={styles.sectionText}>{competition.comp_descrip}</Text>
            </View>

            {/* Accepted Entry Examples */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Accepted Entry Examples</Text>
                <Text style={styles.sectionText}>{competition.entry_examp}</Text>
            </View>

            {/* Prize Winnings Distribution */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Prize Winnings Distribution</Text>
                {competition.prize_distribution.map((item, index) => (
                    <Text key={index} style={styles.sectionText}>
                        {item.place} Place: ${item.amount}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
};

export default CompetitionDetails;