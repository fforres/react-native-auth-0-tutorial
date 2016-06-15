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
  Navigator,
} from 'react-native';
import Login from './src/components/Login';
import Dashboard from './src/components/Dashboard';
class reactnativeauth0tutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          style={styles.nav}
          initialRoute={{ name: 'Login' }}
          renderScene={ this.renderScene }
        />
      </View>
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'Login') {
      return <Login navigator={navigator} />
    }
    if(route.name === 'Dashboard') {
      return <Dashboard navigator={navigator} />
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  nav: {
    flex:1,
    alignSelf: "stretch"
  }
});
AppRegistry.registerComponent('reactnativeauth0tutorial', () => reactnativeauth0tutorial);
