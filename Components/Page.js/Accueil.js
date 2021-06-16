import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

xport default class Accueil extends React.Component {

    render() {
        return (
            <View style={styles.Accueil}>
                <Text>Page d'Accueil</Text>

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