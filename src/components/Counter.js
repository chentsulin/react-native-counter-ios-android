import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class Counter extends Component {
  render() {
    var { increment, incrementIfOdd, incrementAsync, decrement, decrementAsync, counter } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.displayPanel}>
          <Text style={styles.numberBlock}>{counter}</Text>
          <Text style={styles.unitBlock}>/ times</Text>
        </View>
        <View style={[styles.controlPanel, styles.inline]}>
          <TouchableHighlight onPress={increment} style={styles.buttonAddSmall} underlayColor={colors.add.bg}>
            <Text style={[styles.text, styles.textColorAdd]}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={decrement} style={styles.buttonMinusSmall} underlayColor={colors.minus.bg}>
            <Text style={[styles.text, styles.textColorMinus]}>-</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.controlPanel}>
          <TouchableHighlight onPress={incrementIfOdd} style={styles.buttonAdd} underlayColor={colors.add.bg}>
            <Text style={[styles.text, styles.textColorAdd]}>Increment if odd</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => incrementAsync()} style={styles.buttonAdd} underlayColor={colors.add.bg}>
            <Text style={[styles.text, styles.textColorAdd]}>Increment async</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => decrementAsync()} style={styles.buttonMinus} underlayColor={colors.minus.bg}>
            <Text style={[styles.text, styles.textColorMinus]}>Decrement async</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

const colors = {
  background: {
    bg: '#F5FCFF'
  },
  add: {
    font: '#F69',
    border: '#F69',
    bg: '#FFC1D6'
  },
  minus: {
    font: '#6495ED',
    border: '#6495ED',
    bg: '#D0DFF9'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.bg,
  },
  displayPanel: {
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  controlPanel: {
    marginVertical: 30
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  numberBlock: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
  },
  unitBlock: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  textColorAdd: {
    color: colors.add.font,
  },
  textColorMinus: {
    color: colors.minus.font,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonAddSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.add.border,
    width: 80,
  },
  buttonMinusSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.minus.border,
    width: 80,
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.add.border,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonMinus: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.minus.border,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Counter;
