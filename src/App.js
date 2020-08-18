import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ToDo from './screen/ToDo';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ToDo />
      </Provider>
    )
  }
}

export default App;
