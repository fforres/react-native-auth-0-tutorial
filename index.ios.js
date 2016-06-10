/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Login from './src/components/Dashboard';
class reactnativeauth0tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', password: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Login/>
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
});
AppRegistry.registerComponent('reactnativeauth0tutorial', () => reactnativeauth0tutorial);
