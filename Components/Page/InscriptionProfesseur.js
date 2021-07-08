import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,onChangeText,Image, Alert, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default class InscriptionProfesseur extends React.Component {
    constructor(props){
      super(props);

      this.state={
        name:'',
        firstname:'',
        date_of_birth:'',
        mail:'',
        mail_school:'',
        password: '',
        confirm_password:'',
      };
    }
    ///////////////////////:::esijbpiubqpidiudb
    render() {
        return (
          <View style={styles.container}>

            <View style={{ flex: -2 }}>
                  <TextInput
                  value={this.state.name}
                  onChangeText={(name) => this.setState({name})}
                  placeholder='Nom'
                  style={styles.input2}
                  />
                  <TextInput
                  value={this.state.firstname}
                  onChangeText={(firstname) => this.setState({firstname})}
                  placeholder='Prénom'
                  style={styles.input2}
                  />
                  <TextInput
                  value={this.state.date_of_birth}
                  onChangeText={(date_of_birth) => this.setState({date_of_birth})}
                  placeholder='DD/MM/YYYY'
                  style={styles.input2}
                  />
                   <TextInput
                  value={this.state.mail}
                  onChangeText={(mail) => this.setState({mail})}
                  placeholder='Mail Personel'
                  style={styles.input2}
                  />
                   <TextInput
                  value={this.state.mail_school}
                  onChangeText={(mail_school) => this.setState({mail_school})}
                  placeholder='Mail Université'
                  style={styles.input2}
                  />
                  <TextInput
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  placeholder='Mot de passe'
                  type='password'
                  style={styles.input2}
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  />
                   <TextInput
                  value={this.state.confirm_password}
                  onChangeText={(confirm_password) => this.setState({confirm_password})}
                  placeholder='Confirmation de mot de passe'
                  type='password'
                  style={styles.input2}
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  />
            </View>

  
            <View style={{ flex: -1}}>
            <View style={styles.ButtonSyle}>
             <Button
                  title="Terminer"
                  color="#008000"
                  />
                </View>
             </View>
          </View>

            
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

  form:{
       marginBottom:12,
       marginLeft:155,
  },
  
  input2: {
    //width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius : 30,
    backgroundColor:'white',
    top : 15,
  },

  ButtonSyle:{
    padding : 35,
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
