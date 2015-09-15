var { bindActionCreators } = require('redux');
var { connect } = require('react-redux/native');
var Counter = require('../components/Counter');
var CounterActions = require('../actions/counter');

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Counter);
