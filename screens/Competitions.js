import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mockData from '../mockData';
import styles from '../styles/styles';

const Competitions = () => {
  const navigation = useNavigation();

  // Sort competitions by newest first
  const sortedCompetitions = [...mockData.competitions].sort((a, b) => new Date(b.date) - new Date(a.date));

  const renderCompetition = ({ item }) => (
    <TouchableOpacity 
      style={styles.competitionCard} 
      onPress={() => navigation.navigate('CompetitionDetails', { competition: item })}
    >
      <Image source={{ uri: item.cover }} style={styles.competitionImage} />
      <View style={styles.competitionContent}>
        <Text style={styles.competitionTitle}>{item.name}</Text>
        <Text style={styles.competitionNiche}>{item.niche}</Text>
        <View style={styles.brandRow}>
          <Image source={{ uri: item.brandLogo }} style={styles.brandLogo} />
          <Text style={styles.brandName}>{item.brandName}</Text>
        </View>
        <Text style={styles.prizeText}>Prize: ${item.prize}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={sortedCompetitions} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={renderCompetition} 
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Competitions;
