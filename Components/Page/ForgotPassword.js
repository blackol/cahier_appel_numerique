import React from 'react';
import { StyleSheet,Text, View, Block, Input, Button, TextInput,} from 'react-native';

export default class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
  
        this.state={
          mail: ''
        };
      }

      render(){
          return(
            <View style={styles.container}>
                <View style={{ flex: -2 }}>
                 <Text>Veuillez saisir une adresse email liée à votre compte</Text> 
                  <TextInput
                  value={this.state.id_student}
                  onChangeText={(mail) => this.setState({mail})}
                  placeholder='Adresse email'
                  style={styles.input}
                  /></View>

            </View>
          )
      }
}
const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      flexDirection:"column",
      marginTop:30,
     
    },

    input: {
        //width: 200,
        height: 40,
        margin: 12,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius : 10,
        backgroundColor:'white'
      },

});