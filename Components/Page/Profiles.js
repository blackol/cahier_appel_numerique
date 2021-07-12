import React from 'react';
import { StyleSheet, Text, View,Button,Image, Alert, TouchableOpacity, TextInput} from 'react-native';


export default class Profiles extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = {
           user : this.props.user,
            projets: this.props.users || [],
        }}
    ///////////////////////:::esijbpiubqpidiudb
    render() {
      console.log("Profiles")
      console.log(this.state.projets
        )
        console.log(this.props.users)
        return (
          <View style={styles.container}>

            <View style={{flex: 10,flexDirection:"row", marginTop:30,}}>
              <View style={{flex: 1}}></View>
              <View>
                <Image source={require('../asset/Personne.png')}  style={styles.image}/>
              </View>
              <View  style={{flex: 1}}></View>
            </View>

               <View style={styles.profilespage}>
                 <Text>{this.props.users.Nom}</Text>
                 <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}></TextInput>

                 <Text>{this.props.users.Prenom}</Text>
                 <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}></TextInput>

                 <Text>{this.props.users.Promotion}</Text>
                 <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}></TextInput>

                 <Text>{this.props.users.numEtudiant}</Text>
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
