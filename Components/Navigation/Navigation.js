import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from"../Page/HomePage";
import Profiles from "../Page/Profiles";
import {
  SignIns,
  Inscriptions,
  Details,
  Liste,
  Splash,
  InscriptionsEtudiant,
  InscriptionsProfesseur,
  MotDePasseOublie,
  Agendas
} from "./Screen";
var utilisateur ={};
// initialisation des vues qui ont besoin des infos utilisateurs pour fonctionner

const Home = ({ navigation }) => {
  return (
    
    <HomePage navigation={navigation} user = {utilisateur}/>
  )
  }
  const Profile = ({ navigation }) => {
    return (
      
      <Profiles navigation={navigation} users = {utilisateur}/>
    )
    }
  

// Création des Stack Navigator
const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}
    options={{
      headerLeft: () => (
          <Icon.Button name='ios-menu' size={20} title = 'Accueil'
          onPress={() => navigation.toggleDrawer()}/>
      ),
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
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}
    options={{headerLeft: () => (
          <Icon.Button name='ios-menu' size={20}
          onPress={() => navigation.toggleDrawer()}/>
      )
  }}>
    </ProfileStack.Screen>
    <ProfileStack.Screen name="Inscription" component={Inscriptions}/>
    <ProfileStack.Screen name="InscriptionsEtudiant" component={InscriptionsEtudiant} />
    <ProfileStack.Screen name="InscriptionsProfesseur" component={InscriptionsProfesseur} />

  </ProfileStack.Navigator>
);

const SignInStack = createStackNavigator();
const SignInStackScreen = ({ navigation }) => (
  <SigInStack.Navigator>
    <SigInStackScreen.Screen name="SignIn" component={SignIns} />
  </SigInStack.Navigator>
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

const InscriptionStack = createStackNavigator();
const InscriptionStackScreen = () => (
  <InscriptionStack.Navigator>
    <ProfileStack.Screen name="Inscription" component={Inscriptions} />
    <ProfileStack.Screen name="InscriptionsEtudiant" component={InscriptionsEtudiant} />
    <ProfileStack.Screen name="InscriptionsProfesseur" component={InscriptionsProfesseur} />
  </InscriptionStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    <Drawer.Screen name="Inscription" component={InscriptionStackScreen} />
  </Drawer.Navigator>
);




import SignIn from "../Page/SignIn";
class Navigation extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      connected: true,
    }
    
  }
// fonction que l'on va envoyer a notre vue avec de quoi modifier l'etat
  sayConnected(profil)
  {
    utilisateur = profil;
    this.setState({connected: false});
  }
  donnected()
  {
    this.setState({connected: true});
  }
  authentification(){
    if (!this.state.connected){
      return(
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Liste" component={ListeStackScreen} />
        <Drawer.Screen name="Agenda" component={AgendaStackScreen} />
        </Drawer.Navigator>
      )

    }else{
      return null;
    }
  }

  DrawerScreen(){
    if (this.state.connected){
      return(
        <SignInStack.Navigator>
          <SignInStack.Screen name="SignIn" >
            {props => <SignIn {...props} sayConnected = {(profil)=> this.sayConnected(profil)} />} 
            {/*on envoie notre fonction dans la vue SigIN maintenant elle peut l'utilser car stocker dans*/}
          </SignInStack.Screen>
        </SignInStack.Navigator>
      )
    }else{
      return null;
    }
  }


render()
  {
  return (
    <NavigationContainer>  
    {this.authentification()} 
    {this.DrawerScreen()}
    </NavigationContainer>
  );}


  }


/*
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
      signUp: () => {
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
*/
export default Navigation;