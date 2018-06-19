
import React, { Component } from 'react';
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
import { YellowBox } from 'react-native';
import rootReducer from './reducers';
import Router from './Router';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
        <Router />
      </Provider>
      
    );
  }
}

export default App;
