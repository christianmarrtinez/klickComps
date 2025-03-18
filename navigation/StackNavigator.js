import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Competitions from '../screens/Competitions';
import CompetitionDetails from '../screens/CompetitionDetails';
import SubmitComp from '../screens/SubmitComp';
import SC_ig from '../screens/SC_ig';
import SC_snap from '../screens/SC_snap';
import SC_tik from '../screens/SC_tik';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Competitions" component={Competitions} />
            <Stack.Screen name="CompetitionDetails" component={CompetitionDetails} />
            <Stack.Screen name="SubmitComp" component={SubmitComp} />
            <Stack.Screen name="SC_ig" component={SC_ig} />
            <Stack.Screen name="SC_snap" component={SC_snap} />
            <Stack.Screen name="SC_tik" component={SC_tik} />
        </Stack.Navigator>
    );
};

export default StackNavigator;