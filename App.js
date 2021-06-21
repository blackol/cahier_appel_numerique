import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './Components/Navigation/Navigation'
import { StyleSheet, Text, View } from 'react-native';

export default class Apps extends React.Component {
  render() {
    return (
      <Navigation/>
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
