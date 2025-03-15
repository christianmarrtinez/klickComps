import React, { useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mockData from '../mockData';
import styles from '../styles/styles';

const Competitions = () => {
  const navigation = useNavigation();
  const [showActive, setShowActive] = useState(true); // Toggle between active & inactive

  // Filter competitions based on the toggle state
  const filteredCompetitions = mockData.competitions
    .filter((comp) => comp.active === showActive)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
      {/* Toggle Segment */}
      <View style={styles.toggleContainer}>
        <Pressable 
          style={[styles.toggleButton, showActive && styles.activeButton]} 
          onPress={() => setShowActive(true)}
        >
          <Text style={[styles.toggleText, showActive && styles.activeText]}>Active</Text>
        </Pressable>
        <Pressable 
          style={[styles.toggleButton, !showActive && styles.activeButton]} 
          onPress={() => setShowActive(false)}
        >
          <Text style={[styles.toggleText, !showActive && styles.activeText]}>Inactive</Text>
        </Pressable>
      </View>

      {/* Competitions List */}
      <FlatList 
        data={filteredCompetitions} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={renderCompetition} 
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No competitions found</Text>}
      />
    </View>
  );
};

export default Competitions;
