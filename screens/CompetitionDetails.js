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
    </ScrollView>
  );
};

export default CompetitionDetails;
