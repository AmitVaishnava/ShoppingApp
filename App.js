import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./store/reducers/products";

const rootReducers = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducers);

export default function App() {
  return (
    <Provider store={store}>
      <View><Text>Amit</Text></View>
    </Provider>
  );
}
