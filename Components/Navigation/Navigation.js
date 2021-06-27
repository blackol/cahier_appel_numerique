// In App.js in a new project

import * as React from 'react';
import {Button,View,Text,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Accueil from '../Page/Accueil';
import PageDetails from '../Page/PageDetails';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('../asset/Fouillole.jpg')} 
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen
          name="Accueil"
          component={Accueil}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#0074b7', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="PageDetails"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#0074b7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="PageDetails"
        component={PageDetails}
        options={{
          title: 'Second Page', //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Accueil"
          options={{ drawerLabel: 'Home' }}
          component={HomeScreen} />
        <Drawer.Screen
          name="Details"
          options={{ drawerLabel: 'Details' }}
          component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
