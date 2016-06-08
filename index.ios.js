/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Login from './src/components/Login';
class reactnativeauth0tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', password: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
           Usuario
        </Text>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1
          }}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>
           Contraseña
        </Text>
        <TextInput
          secureTextEntry
          style={{
            height: 40,
            borderWidth: 1
          }}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableHighlight
          onPress={() => {
             alert(JSON.stringify(this.state))
          }}
        >
          <Text>
            Submit!
          </Text>
        </TouchableHighlight>

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
