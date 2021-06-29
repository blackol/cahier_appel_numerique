import { Assets } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,onChangeText,Image, Alert, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default class Etudiant extends React.Component {
    constructor(props){
      super(props);

      this.state={
        mail: '',
        password: '',
      };
    }
    ///////////////////////:::esijbpiubqpidiudb
    render() {
        return (
          <View style={styles.container}>
            <View style={{ flex: -2 }} >
              
              <Image source={require('../asset/Personne.png')}  style={styles.image}/>
    
            </View>
            <View style={{ flex: -2 }}>
                  <TextInput
                  value={this.state.mail}
                  onChangeText={(mail) => this.setState({mail})}
                  placeholder='Mail universitaire'
                  style={styles.input}
                  />
                  <TextInput
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  placeholder='Password'
                  type='password'
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  />
                  <TouchableOpacity>
                <View>
                  <Text style={styles.forgot}
                  onPress={() => this.props.navigation.navigate("Mot de passe oublié")}
                  >Mot de passe oublié ?</Text>
                </View>
                </TouchableOpacity>
            </View>

  
            <View style={{ flex: -1}}>
            <View style={styles.ButtonSyle}>
             <Button
                  title="Connecte-toi"
                  color="#0074b7"
                  onPress={() => this.props.navigation.navigate("Page Professeur")}
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
