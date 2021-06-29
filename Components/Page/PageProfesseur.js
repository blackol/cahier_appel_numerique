import React from 'react';
import { StyleSheet, Text, View,Button,Icon,Image,TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Accueil from './Accueil';


export default class PageProfesseur extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                 <TouchableOpacity style={styles.button}
                       onPress={this.onPress}>
                         <Text style={styles.buttonText}>Professeur(e) Présent(e)</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor : '#ff0000',
    marginTop : 80,
    padding: 35,
    width : 300,
    height : 100,
    borderRadius: 15,
    bottom : 95,
},

buttonText:{
  marginRight:40,
  textAlign : 'center',
  paddingLeft: 27,

},
});
