import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.inc = this.inc.bind(this)
  }

  inc() {
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })

    // this.setState((state, props) => {
    //   return {
    //     count: state.count + 1
    //   }
    // })
    // this.setState((state, props) => {
    //   return {
    //     count: state.count + 1
    //   }
    // })
    // this.setState((state, props) => {
    //   return {
    //     count: state.count + 1
    //   }
    // })
  }





  render() {
    return (
      <View style={styles.counter}>
        <TouchableOpacity>
          <Text style={styles.counterTextButton}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counterCount}>{this.state.count}</Text>

        <TouchableOpacity onPress={this.inc}>
          <Text style={styles.counterTextButton}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Counter2 = () => {
  return (
    <View style={styles.counter}>
      <TouchableOpacity>
        <Text style={styles.counterTextButton}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterCount}>0</Text>

      <TouchableOpacity>
        <Text style={styles.counterTextButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <Counter2 />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',

  },
  counter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#005792'
  },

  counterCount: {
    fontSize: 100,
    color: '#f6f6e9',
    textAlign: 'center',
    marginHorizontal: 10

  },
  counterTextButton: {
    fontSize: 100,
    color: '#13334c'
  }

})


