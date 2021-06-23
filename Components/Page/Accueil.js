import { Assets } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,onChangeText,Image, Alert, TouchableOpacity} from 'react-native';


export default class Accueil extends React.Component {
    constructor(props){
      super(props);

      this.state={
        id_student: '',
        password: '',
      };
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../asset/Fouillole.jpg')}  style={{ width: 60, height: 60 }}/> 
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
                <Button
                title="Connecte-toi"
                color="#0074b7"
                onPress={() => this.props.navigation.navigate("Details")}
                />
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
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius : 30,
  },

  buttonStyles:{
    backgroundColor: '#0074b7',
    marginTop : 10,
    padding: 5,
    width : 150,
    borderRadius: 25,
  },


});
