import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';


export default class Agenda extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>En maintenance</Text>
      </View>

    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});