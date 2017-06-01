import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View>
      <Header headerText="Tech Stack" />
      <Text>Initialize App</Text>
    </View>
  </Provider>
);

export default App;
