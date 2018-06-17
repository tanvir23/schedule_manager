
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Header } from './views/common';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <View style={styles.container}>
          <Header headerText='Scheduler' />
        </View>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

export default App;
