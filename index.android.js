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
  TextInput,
  View
} from 'react-native';

export default class HarryTheHairyFairyProject extends Component {
  
  constructor(props) {
      super(props);
      this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Harry the Hairy Fairy Project!
        </Text>
        <Text style={styles.instructions}>
          Login Page
        </Text>
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.instructions}>
          Hello world!
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HarryTheHairyFairyProject', () => HarryTheHairyFairyProject);
