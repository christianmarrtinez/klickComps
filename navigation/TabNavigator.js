import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Competitions from '../screens/Competitions';
import Entries from '../screens/Entries';
import Profiles from '../screens/Profiles';
import CompetitionDetails from '../screens/CompetitionDetails';
import MyBrand from '../screens/MyBrand';
import MyCompetitions from '../screens/MyCompetitions';
import BizLeaderboard from '../screens/BizLeaderboard';
import SubmitComp from '../screens/SubmitComp';
import SC_ig from '../screens/SC_ig';
import SC_snap from '../screens/SC_snap';
import SC_tik from '../screens/SC_tik';
import styles from '../styles/styles';
import EditProfile from '../screens/EditProfile';
import AddContent from '../screens/AddContent';
import LinkAccount from '../screens/LinkAccount';
import mockData from '../mockData';

const Tab = createBottomTabNavigator();
const CompetitionStack = createNativeStackNavigator();
const EntriesStack = createNativeStackNavigator();
const ProfilesStack = createNativeStackNavigator();

const CompetitionStackNavigator = () => (
  <CompetitionStack.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#8b51ff' },
      headerStyle: { backgroundColor: '#8b51ff' },
      headerBackTitleStyle: { color: '#8b51ff' },
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={24} color="#60d3e1" style={{ marginLeft: 10 }} />
      ),
    }}
  >
  <CompetitionStack.Screen 
  name="Competition Screen" 
  component={Competitions}
  options={{
    headerTitle: () => <></>,
    headerLeft: () => (
      <Image 
        source={require('../assets/images/KC.png')} 
        style={{ width: 100, height: 40, resizeMode: 'contain', marginLeft: 10 }} 
      />
    ), 
  }}
/>
    <CompetitionStack.Screen name="CompetitionDetails" component={CompetitionDetails} options={{ title: 'Competition Details' }} />
    <CompetitionStack.Screen name="SubmitComp" component={SubmitComp} />
    <CompetitionStack.Screen name="SC_ig" component={SC_ig} />
    <CompetitionStack.Screen name="SC_snap" component={SC_snap} />
    <CompetitionStack.Screen name="SC_tik" component={SC_tik} />
  </CompetitionStack.Navigator>
);

const EntriesStackNavigator = () => (
  <EntriesStack.Navigator
  screenOptions={{
    headerTintColor: '#fff',
    headerTitleStyle: { color: '#8b51ff' },
    headerStyle: { backgroundColor: '#8b51ff' },
    headerBackTitleStyle: { color: '#8b51ff' },
    headerBackImage: () => (
      <Ionicons name="arrow-back" size={24} color="#60d3e1" style={{ marginLeft: 10 }} />
    ),
  }}
>
    <EntriesStack.Screen 
  name="Entries Screen" 
  component={Entries}
  options={{
    headerTitle: () => (
      <Text style={{ 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginRight: 120
      }}>
        Competitions Submitted
      </Text>
    ),
    headerStyle: { backgroundColor: '#8b51ff' },
  }} 
/>
    <EntriesStack.Screen name="CompetitionDetails" component={CompetitionDetails} options={{ title: 'Competition Details' }} />
    <EntriesStack.Screen name="SubmitComp" component={SubmitComp} />
    <EntriesStack.Screen name="SC_ig" component={SC_ig} />
    <EntriesStack.Screen name="SC_snap" component={SC_snap} />
    <EntriesStack.Screen name="SC_tik" component={SC_tik} />
  </EntriesStack.Navigator>
);


const ProfilesStackNavigator = () => (
  <ProfilesStack.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: { 
        backgroundColor: '#8b51ff',
      },
      headerBackTitleVisible: false,
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={24} color="white" style={{ marginLeft: 10 }} />
      ),
    }}
  >
    <ProfilesStack.Screen 
      name="Profiles" 
      component={Profiles} 
      options={({ navigation, route }) => ({ 
        header: ({ options, route, navigation }) => {
          const profile = mockData.profiles.find(p => p.id === global.currentProfile?.id);
          return (
            <View style={styles.profileHeaderContainer}>
              <Text style={styles.profileHeaderText}>
                {profile?.username || 'Profile'}
              </Text>
            </View>
          );
        }
      })} 
    />
    <ProfilesStack.Screen 
      name="EditProfile" 
      component={EditProfile} 
      options={{ 
        title: 'Edit Profile',
        headerTitleStyle: { color: 'white' },
      }} 
    />
    <ProfilesStack.Screen 
      name="AddContent" 
      component={AddContent} 
      options={{ 
        title: 'Add Content',
        headerTitleStyle: { color: 'white' },
      }} 
    />
    <ProfilesStack.Screen 
      name="LinkAccount" 
      component={LinkAccount} 
      options={{ 
        title: 'Link Account',
        headerTitleStyle: { color: 'white' },
      }} 
    />
  </ProfilesStack.Navigator>
);

const TabNavigator = () => {
    const [role, setRole] = useState('influencer'); 
    const [showSwitchPopup, setShowSwitchPopup] = useState(false);
    const [activeTab, setActiveTab] = useState(''); // Track active tab
  
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
              } else if (route.name === 'My Submissions' || route.name === 'My Competitions') {
                iconName = 'document-text-outline';
              } else if (route.name === 'Profile' || route.name === 'My Brand') {
                iconName = 'person-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#8b51ff',
            tabBarInactiveTintColor: '#D3D3D3',
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopWidth: 1,
              borderTopColor: '#8b51ff',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
              color: '#8b51ff',
            },
          })}
          screenListeners={{
            tabPress: (e) => {
              // Hide the popup if navigating to a different tab
              if (activeTab !== e.target) {
                setShowSwitchPopup(false);
              }
              setActiveTab(e.target);
            },
          }}
        >
          {role === 'influencer' ? (
            <>
              <Tab.Screen name="Competitions" component={CompetitionStackNavigator} options={{ headerShown: false }} />
              <Tab.Screen 
                name="My Submissions" 
                component={EntriesStackNavigator} 
                options={{ headerShown: false }} 
              />
              <Tab.Screen
                name="Profile"
                component={ProfilesStackNavigator}
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
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.popup} onPress={toggleRole}>
              <Text style={styles.popupText}>
                {role === 'influencer' ? 'Switch to Business Owner' : 'Switch to Influencer'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  

export default TabNavigator;
