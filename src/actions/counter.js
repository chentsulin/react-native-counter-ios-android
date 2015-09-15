var actions = exports = module.exports;

exports.INCREMENT_COUNTER = 'INCREMENT_COUNTER';
exports.DECREMENT_COUNTER = 'DECREMENT_COUNTER';

exports.increment = function increment() {
  return {
    type: actions.INCREMENT_COUNTER
  };
};

exports.decrement = function decrement() {
  return {
    type: actions.DECREMENT_COUNTER
  };
};

exports.incrementIfOdd = function incrementIfOdd() {
  return (dispatch, getState) => {
    var { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(actions.increment());
  };
};

exports.incrementAsync = function incrementAsync(delay) {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(actions.increment());
    }, delay);
  };
};
