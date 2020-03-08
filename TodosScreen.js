import * as React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class TodosScreen extends React.Component {
  passcode

  constructor(props) {
    super(props)

    this.route = this.props.route
    this.navigation = this.props.navigation
    this.passcode = this.route.params.passcode

    this.state ={
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if (this.state.isLoading) {
      return(
        <View style={styles.loader}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.todoListContainer}>
        <Text>Passcode: {this.passcode}</Text>
        <FlatList
          style={styles.todoList}
          data={this.state.dataSource}
          renderItem={({item}) => <View style={styles.todoRow}><Text style={styles.todoText} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text></View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoListContainer: {
    width: '100%',
    padding: 10
  },
  todoList: {
    width: '100%',
    paddingTop: 20
  },
  todoRow: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f89f9b'
  },
  todoText: {
    fontSize: 24,
  }
})