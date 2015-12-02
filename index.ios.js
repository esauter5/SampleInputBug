'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var SampleInputBug = React.createClass({
  getInitialState: function() {
    return {
      fieldOne: "Hi",
      fieldTwo: "there"
    }
  },

  componentDidUpdate: function() {
    if (this.state.fieldOne.length === 5) this.refs.two.focus();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          ref="one"
          placeholder="Enter text"
          onChangeText={(text) => { this.setState({fieldOne: text}) }}
          value={this.state.fieldOne}/>
         <TextInput
          ref="two"
          style={styles.inputStyle}
          placeholder="Enter text"
          onChangeText={(text) => { this.setState({fieldTwo: text}) }}
          value={this.state.fieldTwo}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },

  inputStyle: {
    width: 200,
    height: 40,
    textAlign: 'center',
    alignSelf: 'center'
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SampleInputBug', () => SampleInputBug);
