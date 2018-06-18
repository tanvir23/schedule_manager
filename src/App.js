
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { 
  FireBaseAPIKey,
  FireBaseAuthDomain,
  FireBaseDatabaseURL,
  FireBaseProjectId,
  FireBaseStorageBucket,
  FireBaseMessagingSenderId
} from 'react-native-dotenv';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { Header } from './views/common';
import LoginForm from './views/LoginForm';

class App extends Component {
  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: FireBaseAPIKey,
      authDomain: FireBaseAuthDomain,
      databaseURL: FireBaseDatabaseURL,
      projectId: FireBaseProjectId,
      storageBucket: FireBaseStorageBucket,
      messagingSenderId: FireBaseMessagingSenderId
    });
  }
  
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText='Scheduler' />
          <LoginForm />
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
