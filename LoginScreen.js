import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {phoneNumber: '', passcode: ''};
    this.navigation = this.props.navigation
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={styles.loginTextInput}
          placeholder='Enter your phone number'
          textContentType='telephoneNumber'
          keyboardType='phone-pad'
        />
        <TextInput
          style={styles.loginTextInput}
          placeholder='Enter your passcode'
          secureTextEntry={true}
          onChangeText={(text) => this.setState({phoneNumber: this.state.phoneNumber, passcode: text})}
        />
        <Button
          style={styles.loginButton}
          title="Login"
          color="#f89f9b"
          onPress={() => this.navigation.navigate('Todos', {passcode: this.state.passcode})}
        ></Button>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  loginTextInput: {
    width: '90%',
    height: 44,
    margin: 10,
    padding: 5,
    borderColor: '#f89f9b',
    borderWidth: 1
  },
  loginButton: {
    width: '90%',
    height: 44,
    margin: 10,
    padding: 5,
    borderColor: '#f66560',
    borderWidth: 1
  }
})