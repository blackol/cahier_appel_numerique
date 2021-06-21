import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Accueil extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Page d'Accueil ok</Text>
                <Text>Ta pas 10 euros</Text>
                <Text>Donne moi les 2 euros avant</Text>
                <Text>Donne moi </Text>
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
});