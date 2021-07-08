import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from "./context";
import {
  SignIn,
  Home,
  Inscriptions,
  Details,
  Profile,
  Liste,
  Splash,
  InscriptionsEtudiant,
  InscriptionsProfesseur,
  MotDePasseOublie,
  Agendas
} from "./Screen";

const AuthStack = createStackNavigator();
const AuthStackScreen = (navigation) => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="MotDePasseOublie"
      component={MotDePasseOublie}
      options={{ title: "Mot de passe oublié" }}
    />
  </AuthStack.Navigator>
);


const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}
    options={{
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={20} title = 'Accueil'
          onPress={() => navigation.toggleDrawer()}/>
      )
  }}/> 
  </HomeStack.Navigator>
);

const AgendaStack = createStackNavigator();
const AgendaStackScreen = ({navigation}) =>(
  <AgendaStack.Navigator>
    <AgendaStack.Screen name="Agenda" component={Agendas}
     options={{
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={20}
          onPress={() => navigation.toggleDrawer()}/>
      )
  }}
  />
  </AgendaStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}
    options={{headerLeft: () => (
          <Icon.Button name='ios-menu' size={20}
          onPress={() => navigation.toggleDrawer()}/>
      )
  }}/>
     <ProfileStack.Screen name="Inscription" component={Inscriptions}/>
    <ProfileStack.Screen name="InscriptionsEtudiant" component={InscriptionsEtudiant} />
    <ProfileStack.Screen name="InscriptionsProfesseur" component={InscriptionsProfesseur} />
  </ProfileStack.Navigator>
);

const ListeStack = createStackNavigator();
const ListeStackScreen = ({navigation}) => (
  <ListeStack.Navigator>
    <ListeStack.Screen name="Liste" component={Liste}
    options={{
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={20}
          onPress={() => navigation.toggleDrawer()}/>
      )
  }} />
  </ListeStack.Navigator>
);





/*const InscriptionStack = createStackNavigator();
const InscriptionStackScreen = ({navigation}) => (
  <InscriptionStack.Navigator>
    <ProfileStack.Screen name="Inscription" component={Inscriptions}
    options={{
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={20}
          onPress={() => navigation.toggleDrawer()}/>
      )
  }} />
    <ProfileStack.Screen name="InscriptionsEtudiant" component={InscriptionsEtudiant} />
    <ProfileStack.Screen name="InscriptionsProfesseur" component={InscriptionsProfesseur} />
  </InscriptionStack.Navigator>
);*/

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    <Drawer.Screen name="Liste" component={ListeStackScreen} />
    <Drawer.Screen name="Agenda" component={AgendaStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
        MotDePasseOublie: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
