import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
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
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1
  }
});
