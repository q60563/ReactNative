import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  _handleTextChange(event){
    // console.log(event.nativeEvent.text);
    var data = event.nativeEvent.text;
    this.setState({data: data});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.data}
        </Text>
        <TextInput 
          style={styles.input}
          onSubmitEditing={(event) => this._handleTextChange(event)}/>
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
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});

export default TextInput;