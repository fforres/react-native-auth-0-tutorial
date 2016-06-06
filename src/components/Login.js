import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.saludo}>
          Hola!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  saludo: {
    fontSize: 40,
    textAlign: 'center'
  }
});
