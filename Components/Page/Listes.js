import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Listes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Nom', 'Prénom', 'Filière', 'Présent', 'Absent'],
          tableData: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
          ]
        }
      }

      render() {
        const state = this.state;
        return (
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  width:350, height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });