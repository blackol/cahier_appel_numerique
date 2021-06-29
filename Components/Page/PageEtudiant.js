import React from 'react';
import { StyleSheet, Text, View,Button,Icon,Image, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Accueil from './Accueil';


export default class PageEtudiant extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                 <View style={{ flex: -2 }} >
              
                 <TouchableOpacity style={styles.button}
                       onPress={this.onPress}>
                         <Text style={styles.buttonText}>Etudiant(e) Présent(e)</Text>
                </TouchableOpacity>
            
          </View>

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

button2: {
    backgroundColor: '#40c020',
    marginTop : 10,
    padding: 5,
    width : 180,
    borderRadius: 15,
    top : 15,
},

buttonText:{
    marginRight:40,
    textAlign : 'center',
    paddingLeft: 27,

  },

});
