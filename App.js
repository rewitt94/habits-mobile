import React, { Component } from 'react';
import { createStore } from 'redux';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { reducer } from './src/redux/reducer'
import { ListContainer } from './src/components/List.container';
import { getRemainingHabits } from './src/helper/requests';

const store = createStore(reducer);
getRemainingHabits(store.dispatch);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ListContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
