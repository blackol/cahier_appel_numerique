import React from 'react';
import { StyleSheet, Text, View,Button,Icon } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';


export default class AgendaEtudiant extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Page details</Text>
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
