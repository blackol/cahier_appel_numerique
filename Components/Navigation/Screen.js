import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "./context";
import Inscription from "../Page/Inscription";
import InscriptionEtudiant from "../Page/InscriptionEtudiant";
import InscriptionProfesseur from "../Page/InscriptionProfesseur";
import Profiles from "../Page/Profiles";
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

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
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


export const Profile = ({ navigation }) => {
  
  return (
    <ScreenContainer>
      <Profiles navigation={navigation}/>
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);



export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
