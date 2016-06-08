import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';



export default React.createClass({
  getInitialState: function() {
    return {
      text: '',
      password: '',
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>
           Usuario
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>
           Contraseña
        </Text>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
