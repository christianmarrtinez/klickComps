import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Competitions from '../screens/Competitions';
import Entries from '../screens/Entries';
import Profiles from '../screens/Profiles';
import BusinessProfile from '../screens/BusinessProfile'; // Business Profile screen
import CompetitionDetails from '../screens/CompetitionDetails';
import MyBrand from '../screens/MyBrand'; // Business owner "My Brand" screen
import { TouchableOpacity } from 'react-native';

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
    <CompetitionStack.Screen 
      name="Competition Screen" 
      component={Competitions} 
    />
    <CompetitionStack.Screen 
      name="CompetitionDetails" 
      component={CompetitionDetails} 
      options={{ title: 'Competition Details' }} 
    />
  </CompetitionStack.Navigator>
);

const TabNavigator = () => {
  const [role, setRole] = useState('influencer'); // Default to 'influencer' role

  const handleLongPress = () => {
    setRole(prevRole => (prevRole === 'influencer' ? 'businessOwner' : 'influencer'));
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Competitions') {
            iconName = 'trophy-outline';
          } else if (route.name === 'Entries') {
            iconName = 'document-text-outline';
          } else if (route.name === 'Profile') {
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
        tabBarItemStyle: {
          borderRightWidth: route.name !== 'Settings' ? 1 : 0, 
          borderRightColor: '#91D9B1',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          color: '#91D9B1',
        },
      })}
    >
      <Tab.Screen 
        name="Competitions" 
        component={CompetitionStackNavigator}
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Entries" 
        component={Entries}
        options={{ headerShown: false }} 
      />
      
      {/* Conditionally render Profile screen or Business Profile screen */}
      <Tab.Screen 
        name="Profile" 
        component={role === 'influencer' ? Profiles : BusinessProfile}
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity 
              {...props} 
              onLongPress={handleLongPress} // Long press to toggle role
            />
          )
        }} 
      />

      {/* Add the 'My Brand' tab for Business Owner role */}
      {role === 'businessOwner' && (
        <Tab.Screen 
          name="My Brand" 
          component={MyBrand}
          options={{ headerShown: false }} 
        />
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
