/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { Provider } = require('react-redux/native');
var App = require('./src/containers/App');
var configureStore = require('./src/store/configureStore');

var {
  Component,
  AppRegistry,
} = React;

var store = configureStore();

class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxCounterUniversal', () => ReduxCounterUniversal);
