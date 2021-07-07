import React from 'react';
import { StyleSheet, Text, View,Button,Image, Alert, TouchableOpacity} from 'react-native';


export default class Profiles extends React.Component {

  constructor(props)
  {
    super(props)
    this.users ='yolo';
  }

 
    render() {
        return (
          <View style={styles.container}>
               <Text>Profile Screen</Text>
                <Button title="Drawer" width="500px" onPress={() => this.props.navigation.toggleDrawer()} />
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
    height: 200,
    //marginLeft: 80,
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
