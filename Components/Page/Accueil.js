import { Assets } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,onChangeText,Image, Alert, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default class Accueil extends React.Component {
    ///////////////////////:::esijbpiubqpidiudb
    render() {
        return (
          <View style={styles.container}>
            <View style={{ flex: -2 }} >
              
                <Image source={require('../asset/Fouillole.jpg')}  style={styles.image}/>
              
            </View>
          
            <View style={{ flex: -1}}>
            <View style={styles.ButtonSyle}>
             <Button
                  title="Etudiant"
                  color="#0074b7"
                  onPress={() => this.props.navigation.navigate("Etudiant")}
                  />
                </View>

                <View style={styles.ButtonSyle}>
                <Button
                  title="Professeur"
                  color="#0074b7"
                  onPress={() => this.props.navigation.navigate("Professeur")}
                  />
                </View>

                <View style={styles.ButtonSyle}>
                <Button
                  title="Administrateur"
                  color="#0074b7"
                  onPress={() => this.props.navigation.navigate("Detail")}
                  />
                </View>

                <View style={styles.ButtonSyle}>
                <Button
                  title="Inscription"
                  color="#0074b7"
                  onPress={() => this.props.navigation.navigate("Inscription")}
                  />
                </View>


             </View>
          </View>


          
          /*
            <View style={styles.container}>
              <View style={styles.ConteneurButton}>
                <Image source={require('../asset/Fouillole.jpg')}  style={{ width: 60, height: 60 }}/> 
              </View>
              <View style={styles.ConteneurButton}>
                <TextInput
                  value={this.state.id_student}
                  onChangeText={(id_student) => this.setState({id_student})}
                  placeholder='Numéro Étudiant'
                  style={styles.input}
                  />
                  <TextInput
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  placeholder='Password'
                  style={styles.input}
                  />
              </View>
              <View style={styles.ConteneurButton}>
                
              </View>
            </View>
            */
            
        );
    }
    
}


const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    flexDirection:"column",
    marginTop:30,
   
  },

  image:{ 
    
    width: 200, 
    height: 200,
    marginLeft: 80,
    borderRadius : 10,
    
  },

  form:{
       marginBottom:12,
       marginLeft:155,
  },
  
  input: {
    //width: 200,
    height: 40,
    margin: 12,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius : 30,
    backgroundColor:'white'
  },

  ButtonSyle:{
    padding : 16,
    borderRadius : 10,
  },

  btnEyes:{
  position : 'absolute',
  right: 28,
  top:80,

},
  forgot:{
    fontSize:20,
    color:'red',
    left: 145,

  },


  Conteneurphoto :{
    flex: 1,
    backgroundColor:'red',
  },
  ConteneurInput :{
    flex: 1,
    backgroundColor:'yellow',
  },
  ConteneurButton :{
    flex: 1,
    backgroundColor:'green',
  },


});


