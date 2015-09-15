var { createStore, applyMiddleware } = require('redux');
var thunk = require('redux-thunk');
var reducer = require('../reducers');

var createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

module.exports = function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};
