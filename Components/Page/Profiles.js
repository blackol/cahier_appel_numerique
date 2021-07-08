import React from 'react';
import { StyleSheet, Text, View,Button,Image, Alert, TouchableOpacity, TextInput} from 'react-native';


export default class Profiles extends React.Component {
    ///////////////////////:::esijbpiubqpidiudb
    render() {
        return (
          <View style={styles.container}>
               <Image source={require('../asset/Personne.png')}  style={styles.image}/>

               <View style={styles.profilespage}>
                 <Text>Nom</Text>
                 <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}></TextInput>

                 <Text>Prénom</Text>
                 <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}></TextInput>

                 <Text>Filière</Text>
                 <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}></TextInput>

                 <Text>Numéro étudiant</Text>
                 <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}></TextInput>
               </View>

               <View style={{ flex: 5, marginTop:70}}>
               <TouchableOpacity style={styles.button}
                          onPress={() => this.props.navigation.navigate("Inscription")}>
                            <Text style={styles.buttonText}>Inscription</Text>
            </TouchableOpacity>
            </View>
          </View>


            
        );
    }
    
}


const styles = StyleSheet.create({
  container: 
  {
    flex: 10,
    flexDirection:"column",
    marginTop:30,
   
  },

  image:{ 
    
    width: 200, 
    height: 130,
    //marginLeft: 80,
    borderRadius : 20,
    marginBottom : 10,
    
  },

  form:{
       marginBottom:12,
       marginLeft:155,
  },

  profilespage : {
      alignItems : 'stretch',
      marginTop : 30,
  },
  
  textinput :{
    alignItems : 'stretch',
    height : 40,
    color : '#fff',
    borderBottomColor : '#000000',
    borderBottomWidth : 1,
    marginBottom : 8,

  },
  forgot:{
    fontSize:20,
    color:'red',
    left: 145,

  },

  buttonText:{
    marginRight:40,
    textAlign : 'center',
    paddingLeft: 27,

  },

  
  button: {
    backgroundColor : '#ff0000',
    height : 50,
},



});
