import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Competitions from '../screens/Competitions';
import Entries from '../screens/Entries';
import Profiles from '../screens/Profiles';
import CompetitionDetails from '../screens/CompetitionDetails';

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

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Competitions') {
          iconName = 'home';
        } else if (route.name === 'Entries') {
          iconName = 'search';
        } else if (route.name === 'Profile') {
          iconName = 'list';
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
    <Tab.Screen 
      name="Profile" 
      component={Profiles}
      options={{ headerShown: false }} 
    />
  </Tab.Navigator>
);

export default TabNavigator;
