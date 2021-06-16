import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Accueil from './Components/Page/Accueil'
import { StyleSheet, Text, View } from 'react-native';

class Apps extends React.Component {
  render() {
    return (
      <Accueil/>
    )
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
