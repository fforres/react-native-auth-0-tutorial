import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Auth0Lock from 'react-native-lock';
let lock = new Auth0Lock({clientId: "xoy0wSexrEaLTcucZgsM5zh7GUCb3pbG", domain: "fforres.auth0.com"});

export default React.createClass({
  getInitialState: function() {
    return {
      text: '',
      password: '',
    };
  },
  login: function(){
    lock.show({
      closable: true
    }, (err, profile, token) => {
      if (!err) {
        alert("bienvenido: " + profile.nickname)
        this.props.navigator.push({name:'Dashboard', index:1});
      }
    });
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.login}
        >
          <Text>
            Ingresa a la app!
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
});
