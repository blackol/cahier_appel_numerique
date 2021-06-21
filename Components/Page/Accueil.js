import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,onChangeText } from 'react-native';

export default class Accueil extends React.Component {
  

    render() {
        return (
            <View style={styles.container}>
                <Text>Page d'Accueil ok</Text>
                <TextInput style={styles.input}>je teste des trucs</TextInput>
                <Button
                title="Page2"
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
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});