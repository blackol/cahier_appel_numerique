import { Assets } from '@react-navigation/stack';
import React from 'react';
import { Icon } from 'react-native-elements'
import { StyleSheet, Text, View,Button,TextInput,onChangeText,Image, Alert, TouchableOpacity} from 'react-native';

async function storeLoginInfo(id, password)
{
  try{
    AsyncStorage.setItem("identifiant", id);
    AsyncStorage.setItem("pass", password)

  }catch(e)
  {

  }
}
export default class Accueil extends React.Component {
    constructor(props){
      super(props);

    }
    ///////////////////////:::esijbpiubqpidiudb
    render() {
        return (
          <View style={{flex: 10,flexDirection:"column", marginTop:70}}>
            <View style={{ flex: 2 }} >
              
                <Image source={require('../asset/Fouillole.jpg')}  style={styles.image}/>
              
            </View>
            
            
            <View style={{ flex: 0,  marginTop:125 }}>
            <TextInput
                  onChangeText={(id) => this.setState({id})}
                  placeholder='Login'
                  style={styles.input}
                  />
                  <TextInput
                 
                  onChangeText={(password) => this.setState({password})}
                  placeholder='Password'
                  type='password'
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  style={styles.input}
                  />
            </View>
            
            <View style={{ flex: 5, marginTop:20 }}>
            <Button
              title="Mots de Passe oublier ?"
              onPress={() => this.props.navigation.navigate("MotDePasseOublie")}
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
