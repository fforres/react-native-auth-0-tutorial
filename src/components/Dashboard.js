import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
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
          Hola!
        </Text>
        <Text>
         Este será nuestro dashboard
        </Text>
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
