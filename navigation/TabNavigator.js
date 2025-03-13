import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Competitions from '../screens/Competitions';
import Entries from '../screens/Entries';
import Profiles from '../screens/Profiles';
import BusinessProfile from '../screens/BusinessProfile';
import CompetitionDetails from '../screens/CompetitionDetails';
import MyBrand from '../screens/MyBrand';
import MyCompetitions from '../screens/MyCompetitions';
import BizLeaderboard from '../screens/BizLeaderboard';
import styles from '../styles/styles';

const Tab = createBottomTabNavigator();
const CompetitionStack = createNativeStackNavigator();

const CompetitionStackNavigator = () => (
  <CompetitionStack.Navigator
    screenOptions={{
      headerTintColor: '#28353d',
      headerTitleStyle: { color: '#fff' },
      headerBackTitleStyle: { color: '#28353d' },
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={24} color="#60d3e1" style={{ marginLeft: 10 }} />
      ),
    }}
  >
    <CompetitionStack.Screen name="Competition Screen" component={Competitions} />
    <CompetitionStack.Screen name="CompetitionDetails" component={CompetitionDetails} options={{ title: 'Competition Details' }} />
  </CompetitionStack.Navigator>
);

const TabNavigator = () => {
  const [role, setRole] = useState('influencer'); 
  const [showSwitchPopup, setShowSwitchPopup] = useState(false);

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === 'influencer' ? 'businessOwner' : 'influencer'));
    setShowSwitchPopup(false); // Hide popup after switching
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Competitions' || route.name === 'Biz Leaderboard') {
              iconName = 'trophy-outline';
            } else if (route.name === 'Entries' || route.name === 'My Competitions') {
              iconName = 'document-text-outline';
            } else if (route.name === 'Profile' || route.name === 'My Brand') {
              iconName = 'person-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1e6d54',
          tabBarInactiveTintColor: '#91D9B1',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#91D9B1',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#91D9B1',
          },
        })}
      >
        {role === 'influencer' ? (
          <>
            <Tab.Screen name="Competitions" component={CompetitionStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Entries" component={Entries} options={{ headerShown: false }} />
            <Tab.Screen
              name="Profile"
              component={Profiles}
              options={{
                headerShown: false,
                tabBarButton: (props) => (
                  <TouchableOpacity
                    {...props}
                    onLongPress={() => setShowSwitchPopup(true)}
                  />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Tab.Screen name="Biz Leaderboard" component={BizLeaderboard} options={{ headerShown: false }} />
            <Tab.Screen name="My Competitions" component={MyCompetitions} options={{ headerShown: false }} />
            <Tab.Screen
              name="My Brand"
              component={MyBrand}
              options={{
                headerShown: false,
                tabBarButton: (props) => (
                  <TouchableOpacity
                    {...props}
                    onLongPress={() => setShowSwitchPopup(true)}
                  />
                ),
              }}
            />
          </>
        )}
      </Tab.Navigator>

      {/* Pop-up switch button */}
      {showSwitchPopup && (
        <TouchableOpacity style={styles.popup} onPress={toggleRole}>
          <Text style={styles.popupText}>
            {role === 'influencer' ? 'Switch to Business Owner' : 'Switch to Influencer'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TabNavigator;
