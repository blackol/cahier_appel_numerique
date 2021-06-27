import { Assets } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,onChangeText,Image, Alert, TouchableOpacity} from 'react-native';


export default class HomePage extends React.Component {
    
    
    ///////////////////////:::esijbpiubqpidiudb
    render() {
        return (
          <View style={styles.container}>

            <View style={styles.Conteneurnumeroetudiant}>

                <View style={styles.contenneuretu1}>
                    <Text style={styles.nomprenom}>Numéro etudiant : </Text>
                </View>

                <View style={styles.contenneuretu2}>
                    <Text style={styles.nomprenom}>00000000</Text>
                </View>

            </View>
            <View style={{backgroundColor:"#0074b7",height:2}}></View>


            <View style={styles.Conteneurnomprenom}>   
                <View style={styles.conteneurnom}>
                    <Text style={styles.nomprenom}>NOM : </Text>
                    <Text style={styles.nomprenom}>Vôtre le nom</Text>
                </View>

                <View style={styles.conteneurprenom}>
                    <Text style={styles.nomprenom}>Prenom : </Text>
                    <Text style={styles.nomprenom}>Vôtre prenom</Text>
                </View>
            </View>



            <View style={styles.ConteneurCoursetat}>
                <Button tittle="Singn out" onPress={this.props.signOut}/>
            </View>


            <View style={styles.Tabdebord}></View>
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
  Conteneurnumeroetudiant:{
    flex:1,
    flexDirection:"column",
  },
  Conteneurnomprenom:{
    flex:1,
    
  },
  ConteneurCoursetat:{
    flex:1,
    backgroundColor:"yellow",
},
Tabdebord:{
    flex:1,
    backgroundColor:"green",
},
TitleEtudinant:{
    fontSize:40,
},
conteneurprenom:{
    flexDirection:"row",
    flex:1,
},
nomprenom:{
    fontSize:35,
    textAlign:"center",
},
conteneurnom :{
    flexDirection:"row",
    flex:1,
},
contenneuretu1:{
    flex:1,
},
contenneuretu2:{
    flex:1,
},

  

});
