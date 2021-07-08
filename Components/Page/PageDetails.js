import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class PageDetails extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      active:true,
    }
  }

    render() {
        return (
            <View style={styles.container}>
                <Text>Page detail</Text>
                <Button
                  title="Connecte-toi"
                  color="#0074b7"
                  onPress={() => this.props.navigation.navigate("Accueil")}
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
});
