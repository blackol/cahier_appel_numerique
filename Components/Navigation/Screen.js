import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "./context";
import Accueil from "../Page/Accueil";
import HomePage from"../Page/HomePage";
import Inscription from "../Page/Inscription";
import InscriptionEtudiant from "../Page/InscriptionEtudiant";
import InscriptionProfesseur from "../Page/InscriptionProfesseur";
import Profiles from "../Page/Profiles";
import ForgotPassword from "../Page/ForgotPassword";
import Listes from "../Page/Listes";
import Agenda from "../Page/Agenda";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <HomePage navigation={navigation}/>
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Agendas = ({ navigation }) => (
  <ScreenContainer>
    <Agenda navigation={navigation}/>
  </ScreenContainer>
);

export const Inscriptions = ({ navigation }) => (
  <ScreenContainer>
    <Inscription navigation={navigation}/>
  </ScreenContainer>
);
export const InscriptionsEtudiant = () => (
  <ScreenContainer>
    <InscriptionEtudiant />
  </ScreenContainer>
);
export const InscriptionsProfesseur = () => (
  <ScreenContainer>
    <InscriptionProfesseur />
  </ScreenContainer>
);

export const MotDePasseOublie = () => (
  <ScreenContainer>
           <ForgotPassword />
</ScreenContainer>
);

export const Liste = () => (
  <ScreenContainer>
           <Listes />
</ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <Profiles navigation={navigation}/>
      <View style={{ flex: 1}}>
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <ScreenContainer>
       <Accueil navigation={navigation}/>
        <View style={{ flex: 1 , marginTop: -95}}>
          <Button title="Connecter-vous ?" onPress={() => signIn()} />
        </View>
       
     
    </ScreenContainer>
  );
};

/*export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Mot de passe</Text>
      <Button title="Sign Up" onPress={() => MotDePasseOublie()} />
    </ScreenContainer>
  );
};*/
