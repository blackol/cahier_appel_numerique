import React from 'react';
import { Icon } from 'react-native-elements'
import { StyleSheet, Text, View,Button,Image, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';


export default class PageEtudiant extends React.Component {

    render() {
        return (
            <View style={styles.container}>

              <View  style={{ flex: 1,flexDirection:"row", }}>
              <View style={{ flex: 1}}>
                <Button title="Menu" color="black" onPress={() => this.props.navigation.toggleDrawer()} />
              </View>
                <View style={{ flex: 2}}></View>
                <View style={{ flex: 2}}></View>
              </View>
              
                 <View style={{ flex: 3 }} >
              
                    <TouchableOpacity style={styles.button}
                          onPress={this.onPress}>
                            <Text style={styles.buttonText}>Etudiant(e) Présent(e)</Text>
                    </TouchableOpacity>
                
                </View>
                <View  style={{ flex: 3 }} >
                  <Button
                    title="React Native by Example"
                    onPress={() =>
                      this.props.navigation.push("Details", { name: "React Native by Example " })
                    }
                  />
                  <Button
                    title="React Native School"
                    onPress={() =>
                      this.props.navigation.push("Details", { name: "React Native School" })
                    }
                  />
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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