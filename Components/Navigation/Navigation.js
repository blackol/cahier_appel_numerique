// In App.js in a new project

import * as React from 'react';
import { View, Text,Button} from 'react-native';
import Accueil from '../Page/Accueil';
import PageDetails from '../Page/PageDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
      <Accueil navigation={navigation}/>
  );
}
function DetailsScreen(navigation) {
  return (
    <PageDetails navigation={navigation}/>
    
  );
}


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;