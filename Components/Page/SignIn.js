import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,onChangeText,Image, Alert, TouchableOpacity, message} from 'react-native';
// importation des Api 
// importation bd test
import getListeétudiantesFromApi from '../API/Api';
import utilisateurs from '../API/Datatests'



//-------------
export default class Accueil extends React.Component {
  constructor(props)
  {
    super(props)
    this.id = null;
    this.pass = null;
    this.user =utilisateurs;
  }

  
  async connect(infousers){
    if(infousers ){
      
      console.log("Connection")
    this.props.sayConnected(infousers)
    } else{
      message("Hmmm...", "Il semblerait que votre identifiant ou votre mot de passe soit incorrect")
    }
    
    
  }
  
    ///////////////////////:::esijbpiubqpidiudb
    render() {
      //getListeétudiantesFromApi() = this.props
      //utilisateurs = {etu}
      console.log("Singin Vue")
      //console.log(etu)
      console.log(this.user)
        return (
          <View style={{flex: 10,flexDirection:"column", marginTop:30,}}>
            <View style={{ flex: 3, flexDirection:"row" }} >
              <View style={{ flex: 1 }}></View>
                <Image source={require('../asset/Fouillole.jpg')}  style={styles.image}/>
                <View style={{ flex: 1 }}></View>
            </View>
            
            
            <View style={{ flex: 2 }}>
              <TextInput
                  onChangeText = {(text)=>{this.id = text}}
                  placeholder='Numéro Étudiant'
                  style={styles.input}
                  />
              <TextInput
                 onChangeText = {(text)=>{this.pass = text}}
                  placeholder='Password'
                  type='password'
                  style={styles.input}
                  secureTextEntry={true}
                  />
            </View>
            
            <View style={{ flex: 1 }}>
            <Button title="Connecter-vous ?" onPress={() =>this.connect(this.user)} />
            <Button
              title="Mots de Passe oublier"
              onPress={() => this.props.navigation.navigate("CreateAccount")}
            />
            </View>
          </View>


          
          /*
          '
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
    borderRadius : 10,
    
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

  buttonStyles:{
    backgroundColor: '#0074b7',
    marginTop : 10,
    padding: 5,
    width : 150,
    borderRadius: 25,
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
