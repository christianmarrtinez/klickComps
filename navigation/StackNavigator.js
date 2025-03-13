import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Competitions from '../screens/Competitions';
import CompetitionsDetails from '../screens/ContestDetails';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Competitions" component={Competitions} />
        <Stack.Screen name="CompetitionDetails" component={CompetitionsDetails} />
      </Stack.Navigator>
    );
  };

export default StackNavigator;
