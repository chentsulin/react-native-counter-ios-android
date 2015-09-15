var { combineReducers } = require('redux');
var counter = require('./counter');

var rootReducer = combineReducers({
  counter
});

module.exports = rootReducer;
